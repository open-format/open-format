import { BigNumberish, providers, Signer } from 'ethers';
import { BaseContract } from './base';
import * as contract from './contract';

/**
 * Creates a new instances of the OpenFormatNFT class which allows you to interact with a single deployed NFT
 */
export class OpenFormatNFT extends BaseContract {
  address: string;
  signer: Signer;

  constructor(address: string, provider: providers.Provider, signer: Signer) {
    super(provider, signer);
    this.address = address;
    this.signer = signer;
  }

  /**
   * Mints an NFT from a deployed Open Format contract
   * @returns transaction
   */
  async mint() {
    await this.checkNetworksMatch();

    return contract.mint({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Mints an NFT with commission on a contract address
   * @param {string} address - address of the contract
   * @returns transaction
   */
  async mintWithCommission(address: string) {
    await this.checkNetworksMatch();

    return contract.mintWithCommission({
      address,
      contractAddress: this.address,
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
    await this.checkNetworksMatch();

    return contract.setRoyalties({
      ...params,
      contractAddress: this.address,
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
    await this.checkNetworksMatch();

    return contract.getRoyalties({
      salePrice,
      contractAddress: this.address,
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
    await this.checkNetworksMatch();

    return contract.setupRevenueSharing({
      ...params,
      contractAddress: this.address,
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
    await this.checkNetworksMatch();

    return contract.allocateRevenueShares({
      allocation: params,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Get the balance of a collaborator
   * @param {string} address - Address of the collaborator
   * @returns BigNumber
   */
  async getCollaboratorBalance(address: string) {
    await this.checkNetworksMatch();

    return contract.getCollaboratorBalance({
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Withdrawl of collaborator funds
   * @param {string} address - Address of the collaborator
   * @returns
   */
  async withdrawCollaboratorFunds(address: string) {
    await this.checkNetworksMatch();

    return contract.withdrawCollaboratorFunds({
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Get the balance of a token
   * @param {BigNumberish} token - Token number
   * @returns BigNumber
   */
  async getTokenBalance(token: BigNumberish) {
    await this.checkNetworksMatch();

    return contract.getTokenBalance({
      token,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Withdrawl of token funds
   * @param {BigNumberish} token - Token number
   * @returns
   */
  async withdrawTokenFunds(token: BigNumberish) {
    await this.checkNetworksMatch();

    return contract.withdrawTokenFunds({
      token,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the percentage of the primary commission
   * @param {{ percent: BigNumberish; }} percent - Percent
   * @returns
   */
  async setPrimaryCommissionPercent(percent: BigNumberish) {
    await this.checkNetworksMatch();

    return contract.setPrimaryCommissionPercent({
      percent,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the percentages of the secondary commission
   * @param {BigNumberish} percent - Percent
   * @returns
   */
  async setSecondaryCommissionPercent(percent: BigNumberish) {
    await this.checkNetworksMatch();

    return contract.setSecondaryCommissionPercent({
      percent,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  async setTokenSalePrice({
    tokenId,
    price,
  }: {
    tokenId: BigNumberish;
    price: BigNumberish;
  }) {
    await this.checkNetworksMatch();

    return contract.setTokenSalePrice({
      tokenId,
      price,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Buy
   * @param {Object} params
   * @param {number} params.tokenId - id of the token
   * @returns
   */
  async buy(tokenId: BigNumberish) {
    await this.checkNetworksMatch();

    return contract.buy({
      tokenId,
      contractAddress: this.address,
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
    await this.checkNetworksMatch();

    return contract.buyWithCommission({
      tokenId,
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }
}
