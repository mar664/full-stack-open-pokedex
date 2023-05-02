const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) { // eslint-disable-next-line no-unused-vars
      // implement node event listeners here
    },
  },
})
