export default async function teardown() {
  (globalThis as any).__GANACHE__.close();
}
