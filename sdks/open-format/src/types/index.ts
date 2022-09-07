import { Signer } from 'ethers';

export interface SDKOptions {
  network: Chain;
  signer?: Signer | string;
  factory?: string;
  nftStorageToken?: string;
}

export type Chain = 'mainnet' | 'mumbai' | 'localhost' | (string & {});

export type TokenProperty = {
  id: string;
  key: string;
  value: string;
};

export type ReleaseType = 'image' | 'art' | 'ticket' | 'audio' | 'video';

export type Attribute = { key: string; value: string };

export type ChainConfig = {
  id: Chain;
  chainId: number;
  name: string;
  token: string;
  rpcUrl: string;
};

export interface NFTMetadata {
  name: string;
  description?: string;
  image?: Blob | File;
  releaseType?: ReleaseType;
  symbol: string;
  url?: string;
  metadata?: {
    [key: string]: string;
  };
  attributes?: Attribute[];
  maxSupply: number;
  mintingPrice: number;
}

export interface IPFSData {
  name: string;
  description: string;
  image: Blob | File;
  attributes?: Attribute[];
  factory_id?: string;
  release_type?: ReleaseType;
}

/**
 * Subgraph responses
 */

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

export interface TokensResponse {
  tokens: {
    id: string;
    properties: TokenProperty[];
    release_type: ReleaseType;
    createdAt: string;
  }[];
}
