module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-runtime',
    'babel-plugin-dynamic-import-node'
  ]
}
