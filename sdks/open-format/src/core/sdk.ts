import merge from 'lodash.merge';
import type { NFTMetadata } from './contract';
import * as contract from './contract';
import * as subgraph from './subgraph';

interface SDKOptions {
  network: string;
}

/**
 * Creates a new instance of the Open Format SDK
 * @public
 */
export class OpenFormatSDK {
  options: SDKOptions;

  static defaultOptions: SDKOptions = {
    network: 'http://localhost:8545',
  };

  constructor(options?: SDKOptions) {
    this.options = merge(OpenFormatSDK.defaultOptions, options);
  }


  deploy({ nft, privateKey }: {nft: NFTMetadata; privateKey: string }) {
    return contract.deploy({
      RPC_URL: this.options.network,
      WALLET_PRIVATE_KEY: privateKey,
      nft,
    })
  };

  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;
}
