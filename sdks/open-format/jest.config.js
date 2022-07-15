/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  globalSetup: './test/setup.ts',
  globalTeardown: './test/teardown.ts',
  preset: 'ts-jest/presets/default-esm',
  transform: {},
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testTimeout: 10000,
};

export default config;
