const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  testEnvironment: "jsdom",
  setupFiles: ["./jest.polyfills.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(config);
