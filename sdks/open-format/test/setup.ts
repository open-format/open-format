import ganache from 'ganache';

export default function setup() {
  const server = ganache.server({
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
        {
          balance: 1000000000000000000000,
          secretKey:
            '0x04c65fb1737cf9a5fb605b403b5027924309e53a3433d06029a0441cc03e2042',
        },
      ],
    },
  });

  (globalThis as any).__GANACHE__ = server;

  return new Promise<void>((resolve, reject) => {
    server.listen(8545, error => {
      if (error) {
        reject(error);
      }

      resolve();
    });
  });
}
