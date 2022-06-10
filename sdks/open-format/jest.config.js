/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  globalSetup: './test/setup.ts',
  globalTeardown: './test/teardown.ts',
};

module.exports = config;
