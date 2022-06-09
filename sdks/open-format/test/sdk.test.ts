import { Signer } from 'ethers';
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

  it('will create a signer when a private key is passed as the signer option with a given network', async () => {
    const sdk = new OpenFormatSDK({
      network: 'mumbai',
      signer:
        '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
    });

    const network = await sdk.signer?.provider?.getNetwork();

    expect(sdk.signer).toBeDefined();
    expect(Signer.isSigner(sdk.signer)).toBe(true);
    expect(network?.chainId).toBe(80001);
  });
});
