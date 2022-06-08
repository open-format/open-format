import { OpenFormatSDK } from '../src';

describe('sdk', () => {
  it('sets a default provider', async () => {
    const sdk = new OpenFormatSDK();

    expect(sdk.provider._isProvider).toBe(true);
    expect(sdk.providerUrl).toBe('http://localhost:8545');
  });

  it('allows to pass a network by name which creates a provider', async () => {
    const sdk = new OpenFormatSDK({ network: 'mumbai' });
    const network = await sdk.provider.getNetwork();

    expect(network.chainId).toBe(80001);
  });
});
