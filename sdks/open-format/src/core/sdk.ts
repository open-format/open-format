import { providers, BigNumberish, Signer } from 'ethers';
import merge from 'lodash.merge';
import {
  getProviderFromUrl,
  getProviderUrl,
  getSigner,
} from '../helpers/providers';
import { NFTMetadata, SDKOptions } from '../types';
import * as contract from './contract';
import * as subgraph from './subgraph';

function invariant(condition: any, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
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

    const tx = await contract.deploy({
      signer: this.signer,
      nft,
    });

    this.options.contractAddress = tx.contractAddress;

    return tx;
  }

  /**
   * Mints an NFT on a contract address
   * @returns transaction
   */
  async mint() {
    invariant(this.signer, 'No signer set, aborting mint');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.mint({
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Setup royalties to be paid to an address
   * @param {Object} params
   * @param {number} params.royaltyReceiverAddress - address of the receiver of the royalties
   * @param {number} params.royaltyPercentage - the percentage between 0-1000 they will receive
   * @returns
   */
  async setRoyalties(params: {
    royaltyReceiverAddress: string;
    royaltyPercentage: number;
  }) {
    invariant(this.signer, 'No signer set, aborting setting royalties');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.setRoyalties({
      ...params,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Gets royalties based on sale price
   * @param {Object} params
   * @param {number} params.salePrice - sale price to get
   * @returns
   */
  async getRoyalties({ salePrice }: { salePrice: number }) {
    invariant(this.signer, 'No signer set, aborting getting royalties');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.getRoyalties({
      salePrice,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Sets up Revenue Sharing
   * @param {Object} params
   * @param {string} contractAddress - address of the contract
   * @param {string[]} collaborators - list of collaborators addresses
   * @param {number[]} shares - list of shares for each collaborator
   * @param {number} holderPercentage - the holders percentage
   * @returns
   */
  async setupRevenueSharing(params: {
    revShareExtensionAddress: string;
    collaborators: string[];
    shares: BigNumberish[];
    holderPercentage: BigNumberish;
  }) {
    invariant(this.signer, 'No signer set, aborting revenue sharing setup');
    invariant(this.options.contractAddress, 'No contract address set');

    return contract.setupRevenueSharing({
      ...params,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  rawRequest = subgraph.rawRequest;
  getSaleDataForToken = subgraph.getSaleDataForToken;

  /**
   * Gets tokens for a given factory
   * @param {Object} params
   * @param {string} params.factoryId - id of the factory
   * @returns tokens
   */
  getTokens() {
    invariant(typeof this.options.factory === 'string', 'Factory ID not set');
    return subgraph.getTokens({ factoryId: this.options.factory });
  }

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
