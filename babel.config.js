module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers:
            process.env.NODE_ENV === 'development'
              ? 'last 2 versions'
              : 'supports es6-module and supports css-grid',
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
}
