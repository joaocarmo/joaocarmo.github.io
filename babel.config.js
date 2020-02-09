module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          browsers: (process.env.NODE_ENV === 'development' ? 'last 2 versions' : '> 0.25%, not dead'),
        },
      },
    ],
    '@babel/preset-react',
  ],
}
