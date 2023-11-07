require("dotenv").config();
const { defineConfig } = require("cypress");

const projectId = process.env.PROJECT_ID;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: projectId
});
