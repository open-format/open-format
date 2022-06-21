import { providers, Signer } from 'ethers';
import merge from 'lodash.merge';
import {
  getProviderFromUrl,
  getProviderUrl,
  getSigner,
} from '../helpers/providers';
import { Chain, NFTMetadata } from '../types';
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

  provider: providers.Provider;

  signer?: Signer;

  static defaultOptions: SDKOptions = {
    network: 'http://localhost:8545',
  };

  constructor(options?: SDKOptions) {
    this.options = merge({}, OpenFormatSDK.defaultOptions, options);

    const providerUrl = getProviderUrl(this.options.network);
    this.provider = getProviderFromUrl(providerUrl);

    if (this.options.signer) {
      this.signer = getSigner(this.options.signer, this.provider);
    }
  }

  /**
   * Deploys a version of the Open Format contract
   * @param {Object} nft - the nft to deploy
   * @param {number} nft.maxSupply - the max supply of the nft
   * @param {number} nft.mintingPrice - the amount to mint the nft
   * @param {string} nft.name - name of the nft
   * @param {string} nft.symbol - symbol for the nft
   * @param {string} nft.url - storage URL
   * @returns transaction
   */
  async deploy(nft: NFTMetadata) {
    if (!this.signer) {
      throw new Error('No signer set, aborting deploy');
    }

    await this.checkNetworksMatch();

    return contract.deploy({
      signer: this.signer,
      nft,
    });
  }

  /**
   * Mints an NFT on a contract address
   * @param {Object} options - options
   * @param {string} options.contractAddress - The address of the contract to mint
   * @returns transaction
   */
  async mint({ contractAddress }: { contractAddress: string }) {
    if (!this.signer) {
      throw new Error('No signer set, aborting mint');
    }

    await this.checkNetworksMatch();

    return contract.mint({ contractAddress, signer: this.signer });
  }

  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;

  /**
   * Throws an error if the current signer and provider's networks differ
   * @private
   */
  private async checkNetworksMatch() {
    if (this.signer) {
      const signerNetwork = await this.signer.provider?.getNetwork();
      const providerNetwork = await this.provider.getNetwork();

      if (signerNetwork?.chainId !== providerNetwork.chainId) {
        throw new Error(`Chains don't match`);
      }
    }
  }
}
