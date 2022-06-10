export type Chain = 'mumbai' | (string & {});

export interface NFTMetadata {
  name: string;
  symbol: string;
  url: string;
  maxSupply: number;
  mintingPrice: number;
}
