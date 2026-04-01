import path from 'path'
import { readFileSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

function htmlInject(data) {
  return {
    name: 'html-inject',
    transformIndexHtml(html) {
      return Object.entries(data).reduce(
        (result, [key, value]) => result.replaceAll(`<%= ${key} %>`, value),
        html,
      )
    },
  }
}

function cspPlugin(directives) {
  return {
    name: 'csp',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (ctx.server) return html
        const content = Object.entries(directives)
          .map(([key, val]) => {
            const value = Array.isArray(val) ? val.join(' ') : val
            return `${key} ${value}`
          })
          .join('; ')
        return html.replace(
          '</head>',
          `  <meta http-equiv="Content-Security-Policy" content="${content}">\n</head>`,
        )
      },
    },
  }
}

export default defineConfig(({ mode }) => ({
  root: 'lib',
  publicDir: '../public',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@js': path.resolve(import.meta.dirname, 'lib', 'js'),
      '@scss': path.resolve(import.meta.dirname, 'lib', 'scss'),
      '@img': path.resolve(import.meta.dirname, 'lib', 'img'),
    },
    extensions: ['.js', '.jsx', '.scss', '.css'],
  },
  define: {
    VERSION: JSON.stringify(pkg.version),
    BUILDTIME: JSON.stringify(new Date().toISOString().substring(0, 10)),
    ENVIRONMENT: JSON.stringify(mode),
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    react(),
    htmlInject({
      title: pkg.title,
      author: pkg.author.name,
      description: pkg.description,
      keywords: pkg.keywords.join(', '),
    }),
    cspPlugin({
      'default-src': "'self'",
      'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
      'style-src': [
        "'unsafe-inline'",
        "'self'",
        "'unsafe-eval'",
        'https://fonts.googleapis.com',
      ],
      'img-src': ["'self'", 'data:'],
      'font-src': ["'self'", 'https://fonts.gstatic.com'],
      'base-uri': "'self'",
      'media-src': "'self'",
      'object-src': "'none'",
      'form-action': "'self'",
      'child-src': "'self'",
      'frame-src': "'self'",
      'connect-src': [
        "'self'",
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ],
      'worker-src': "'self'",
      'manifest-src': "'self'",
      'require-trusted-types-for': "'script'",
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: pkg.title,
        short_name: pkg.author.name,
        description: pkg.description,
        theme_color: '#FF5700',
        background_color: '#454545',
        icons: [
          { src: '/img/my-icon-192.png', sizes: '192x192', type: 'image/png' },
        ],
        start_url: '/',
        scope: '/',
        display: 'standalone',
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
              },
            },
          },
        ],
      },
    }),
  ],
}))
