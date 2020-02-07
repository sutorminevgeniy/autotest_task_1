// conf.js
exports.config = {
  directConnection: true,

  // framework: 'jasmine',
  framework: 'mocha',

  baseUrl: 'localhost',

  specs: [
    '../specs/*.js'
  ],

  capabilities: {
    browserName: 'chrome'
  },

  mochaOpts: {
      reporter: 'mochawesome',
      reporterOptions: {
        reportFilename: 'UItest',
        reportDir: 'reports'
      },
      timeout: 70000
  }
}