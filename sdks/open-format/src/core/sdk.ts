import { providers, Signer } from 'ethers';
import merge from 'lodash.merge';
import {
  Chain,
  getProviderFromUrl,
  getProviderUrl,
  getSigner,
} from '../helpers/providers';
import * as contract from './contract';
import * as subgraph from './subgraph';

interface SDKOptions {
  network: Chain;
  signer?: Signer | string;
}

/**
 * Creates a new instance of the Open Format SDK
 * @public
 */
export class OpenFormatSDK {
  options: SDKOptions;

  providerUrl: string;
  provider: providers.Provider;

  signer?: Signer;

  static defaultOptions: SDKOptions = {
    network: 'http://localhost:8545',
  };

  constructor(options?: SDKOptions) {
    this.options = merge(OpenFormatSDK.defaultOptions, options);
    this.providerUrl = getProviderUrl(this.options.network);
    this.provider = getProviderFromUrl(this.providerUrl);

    if (this.options.signer) {
      this.signer = getSigner(this.options.signer, this.provider);
    }
  }

  deploy(nft: contract.NFTMetadata) {
    if (!this.signer) {
      throw new Error('No signer set, aborting deploy');
    }

    return contract.deploy({
      signer: this.signer,
      nft,
    });
  }

  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;
}
