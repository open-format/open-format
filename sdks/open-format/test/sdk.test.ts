import { Signer } from 'ethers';
import { OpenFormatSDK } from '../src';

describe('sdk', () => {
  it('sets a default provider of localhost', async () => {
    const sdk = new OpenFormatSDK();
    const network = await sdk.provider.getNetwork();

    expect(network.chainId).toBe(1337);
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

  it('sets the default factory id', () => {
    const factory = 'deafault-test-factory';

    const sdk = new OpenFormatSDK({
      network: 'mumbai',
      factory,
    });
    expect(sdk.options.factory).toBe(factory);
  });

  it('sets the default nft storage token', () => {
    const nftStorageToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY0OUMxZjBBRTdmYjMxNjI1NDNmZkEwNTc1NkM1QzNFNzI5MjhEYzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODAzNzcyOTMwNiwibmFtZSI6InRoZWZhY3RvcnkifQ._Jc515t7h-8-4tTrLUqAL5i3B4Zv2BKDcOjQnlIedgE';

    const sdk = new OpenFormatSDK({
      network: 'mumbai',
      nftStorageToken,
    });
    expect(sdk.options.nftStorageToken).toBe(nftStorageToken);
  });
});
