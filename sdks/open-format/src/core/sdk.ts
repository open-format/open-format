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
   * Mints an NFT with commission on a contract address
   * @param {string} address - address of the contract
   * @returns transaction
   */
  async mintWithCommission(address: string) {
    invariant(this.signer, 'No signer set, aborting mint');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.mintWithCommission({
      address,
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
   * @param {string} params.contractAddress - address of the contract
   * @param {{
   *  address: string;
   *  share: BigNumberish;
   * }[]} params.collaborators - list of collaborators addresses
   * @param {number} params.holderPercentage - the holders percentage
   * @returns
   */
  async setupRevenueSharing(params: {
    revShareExtensionAddress: string;
    collaborators: {
      address: string;
      share: BigNumberish;
    }[];
    holderPercentage: BigNumberish;
  }) {
    invariant(this.signer, 'No signer set, aborting revenue sharing setup');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.setupRevenueSharing({
      ...params,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Allocation of shares
   * @param {{
   *  address: string;
   *  share: BigNumberish;
   * }[]} params - array of account addresses and shares
   * @returns
   */
  async allocateRevenueShares(
    params: {
      address: string;
      share: BigNumberish;
    }[]
  ) {
    invariant(this.signer, 'No signer set, aborting revenue sharing setup');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.allocateRevenueShares({
      allocation: params,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Get the balance of a collaborator
   * @param {string} address - Address of the collaborator
   * @returns BigNumber
   */
  async getCollaboratorBalance(address: string) {
    invariant(this.signer, 'No signer set, aborting revenue sharing setup');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.getCollaboratorBalance({
      address,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Withdrawl of collaborator funds
   * @param {string} address - Address of the collaborator
   * @returns
   */
  async withdrawCollaboratorFunds(address: string) {
    invariant(
      this.signer,
      'No signer set, aborting withdrawl of collaborator funds'
    );
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.withdrawCollaboratorFunds({
      address,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Get the balance of a token
   * @param {BigNumberish} token - Token number
   * @returns BigNumber
   */
  async getTokenBalance(token: BigNumberish) {
    invariant(this.signer, 'No signer set, aborting get token balance');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.getTokenBalance({
      token,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Withdrawl of token funds
   * @param {BigNumberish} token - Token number
   * @returns
   */
  async withdrawTokenFunds(token: BigNumberish) {
    invariant(this.signer, 'No signer set, aborting withdrawl of token funds');
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.withdrawTokenFunds({
      token,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Sets the percentage of the primary commission
   * @param {{ percent: BigNumberish; }} percent - Percent
   * @returns
   */
  async setPrimaryCommissionPercent(percent: BigNumberish) {
    invariant(
      this.signer,
      'No signer set, aborting set primary commission percent'
    );
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.setPrimaryCommissionPercent({
      percent,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Sets the percentages of the secondary commission
   * @param {BigNumberish} percent - Percent
   * @returns
   */
  async setSecondaryCommissionPercent(percent: BigNumberish) {
    invariant(
      this.signer,
      'No signer set, aborting set secondary commission percent'
    );
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.setSecondaryCommissionPercent({
      percent,
      contractAddress: this.options.contractAddress,
      signer: this.signer,
    });
  }

  /**
   * Buy with commission
   * @param {Object} params
   * @param {number} params.tokenId - id of the token
   * @param {number} params.address - Address
   * @returns
   */
  async buyWithCommission({
    tokenId,
    address,
  }: {
    tokenId: BigNumberish;
    address: string;
  }) {
    invariant(
      this.signer,
      'No signer set, aborting set secondary commission percent'
    );
    invariant(this.options.contractAddress, 'No contract address set');

    await this.checkNetworksMatch();

    return contract.buyWithCommission({
      tokenId,
      address,
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
