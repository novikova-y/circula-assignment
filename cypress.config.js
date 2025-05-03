const { defineConfig } = require("cypress");

module.exports = defineConfig({
  includeShadowDom: true,
  e2e: {
    baseUrl: "https://circula-qa-challenge.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
