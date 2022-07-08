/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  globalSetup: './test/setup.ts',
  globalTeardown: './test/teardown.ts',
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/default-esm',
  transform: {},
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    rxjs: '<rootDir>../../node_modules/rxjs/dist/cjs/index.js',
  },
};

export default config;
