let transformRemoveConsolePlugin = []
if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ["transform-remove-console"]
}

module.exports = {
  plugins: ["transform-remove-console"],

  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
