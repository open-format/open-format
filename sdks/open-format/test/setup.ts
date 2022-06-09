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
