export default function(address: string) {
  const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

  return address === ZERO_ADDRESS;
}
