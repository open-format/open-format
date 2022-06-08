import merge from 'lodash.merge';
import type { NFTMetadata } from './contract';
import * as contract from './contract';
import * as subgraph from './subgraph';
import { Signer } from "ethers"

interface SDKOptions {
  network: string;
  signer?: Signer
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


  deploy(nft: NFTMetadata) {
    if (!this.options.signer) {
      throw new Error("Not signer set")
    }

    return contract.deploy({
      signer: this.options.signer,
      nft,
    })
  };

  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;
}
