export type Chain = 'mainnet' | 'mumbai' | 'localhost' | (string & {});

export type ChainConfig = {
  id: Chain;
  chainId: number;
  name: string;
  token: string;
  rpcUrl: string;
};

export interface NFTMetadata {
  name: string;
  symbol: string;
  url: string;
  maxSupply: number;
  mintingPrice: number;
}

export interface SaleDataResponse {
  token: {
    saleData: {
      id: string;
      maxSupply: string;
      totalEarnings: string;
      totalSold: string;
      totalReleased: string;
      salePrice: string;
      createdAt: string;
      royaltiesPercentage: string;
      primaryCommission: string;
      secondaryCommission: string;
    };
  } | null;
}
