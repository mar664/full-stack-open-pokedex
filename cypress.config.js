const { defineConfig } = require('cypress')
/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) { 
      // implement node event listeners here
    },
  },
})
