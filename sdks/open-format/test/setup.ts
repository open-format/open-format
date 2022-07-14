import ganache from 'ganache';

export default function setup() {
  const server = ganache.server({
    fork: {
      // Are you seeing issues when running tests?
      // If so, it could be a possibility that this RPC could be down.
      // Visit chainlist.org, show testnets and search for Mumbai.
      // Click the down arrow on Mumbai and you will see a list of URLs that can
      // be used here if one of them is down.
      url: 'https://matic-testnet-archive-rpc.bwarelabs.com/',
    },
    logging: {
      quiet: true,
    },
    wallet: {
      accounts: [
        {
          // 0xee4abd006630aea6fa3e685c99506db31c09b3f4
          balance: 1000000000000000000000,
          secretKey:
            '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
        },
        {
          // 0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0
          balance: 1000000000000000000000,
          secretKey:
            '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        },
      ],
    },
  });

  (globalThis as any).__GANACHE_OPEN_FORMAT__ = server;

  return new Promise<void>((resolve, reject) => {
    server.listen(8545, error => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}
