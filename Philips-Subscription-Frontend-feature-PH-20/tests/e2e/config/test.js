module.exports = {
  baseUrl: 'https://philipssubscription-frontend.azurewebsites.net',
  pageLoadTimeout: 100000,
  video: false,
  screenshotOnRunFailure: false,
  reporter: 'mocha-multi-reporters',
  reporterOptions: {
    configFile: 'tests/e2e/config/reporter-options.test.json'
  }
}
