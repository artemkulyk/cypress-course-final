const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g5c7xo',
  e2e: {
    experimentalStudio: true,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
