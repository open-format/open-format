import { providers, Signer } from 'ethers';
import merge from 'lodash.merge';
import {
  Chain,
  getProviderFromUrl,
  getProviderUrl,
} from '../helpers/providers';
import * as contract from './contract';
import * as subgraph from './subgraph';

interface SDKOptions {
  network: Chain;
  signer?: Signer;
}

/**
 * Creates a new instance of the Open Format SDK
 * @public
 */
export class OpenFormatSDK {
  options: SDKOptions;

  providerUrl: string;
  provider: providers.Provider;

  static defaultOptions: SDKOptions = {
    network: 'http://localhost:8545',
  };

  constructor(options?: SDKOptions) {
    this.options = merge(OpenFormatSDK.defaultOptions, options);
    this.providerUrl = getProviderUrl(this.options.network);
    this.provider = getProviderFromUrl(this.providerUrl);
  }

  deploy(nft: contract.NFTMetadata) {
    if (!this.options.signer) {
      throw new Error('No signer set, aborting deploy');
    }

    return contract.deploy({
      signer: this.options.signer,
      nft,
    });
  }

  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;
}
