import { Signer } from 'ethers';
import ganache from 'ganache';
import { OpenFormatSDK } from '../src';

let server: ReturnType<typeof ganache.server>;

beforeAll(() => {
  return new Promise<void>((resolve, reject) => {
    server = ganache.server({
      logging: {
        quiet: true,
      },
      wallet: {
        accounts: [
          {
            balance: 1000000000000000000000,
            secretKey:
              '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
          },
        ],
      },
    });

    server.listen(8545, async err => {
      if (err) {
        reject();
      }

      resolve();
    });
  });
});

afterAll(() => {
  server.close();
});

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
});
