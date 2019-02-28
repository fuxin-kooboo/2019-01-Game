// https://docs.cypress.io/guides/guides/plugins-guide.html

module.exports = (on, config) => {
  var projectConfig = {
    fixturesFolder: 'tests/e2e/fixtures',
    integrationFolder: 'tests/e2e/specs',
    screenshotsFolder: 'tests/e2e/screenshots',
    videosFolder: 'tests/e2e/videos',
    supportFile: 'tests/e2e/support/index.js'
  }

  if (config.env.SITE_ENV) {
    projectConfig = Object.assign(projectConfig, require('../config/' + config.env.SITE_ENV + '.js'))
  }

  return Object.assign({}, config, projectConfig)
}
