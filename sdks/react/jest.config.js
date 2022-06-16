const esModules = [
  '@web3-onboard/react',
  '@web3-onboard/core',
  '@web3-onboard/common',
  '@web3-onboard/injected-wallets',
  '@web3-onboard/walletconnect',
].join('|');

module.exports = {
  transformIgnorePatterns: [
    `[/\\\\]node_modules[/\\\\](?!${esModules}).+\\.(js|jsx)$`,
  ],
  testEnvironment: '@happy-dom/jest-environment',
};
