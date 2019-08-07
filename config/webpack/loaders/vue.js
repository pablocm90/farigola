module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader'
  }],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  }
}
