import { BigNumberish, providers, Signer } from 'ethers';
import { invariant } from '../helpers/invariant';
import { BaseContract } from './base';
import * as contract from './contract';

/**
 * Creates a new instances of the OpenFormatNFT class which allows you to interact with a single deployed NFT
 * @class
 * @public
 */
export class OpenFormatNFT extends BaseContract {
  address: string;

  constructor(address: string, provider: providers.Provider, signer?: Signer) {
    super(provider, signer);
    this.address = address;
    this.signer = signer;
  }

  /**
   * Mints an NFT from a deployed Open Format contract
   * @returns {ContractReceipt}
   */
  async mint() {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.mint({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Mints an NFT with commission on a contract address
   * @param {string} address Address of the contract
   * @returns {ContractReceipt}
   */
  async mintWithCommission(address: string) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.mintWithCommission({
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Mints an NFT with commission on a contract address
   * @param {BigNumberish} price The desired price of minting
   * @returns {ContractReceipt}
   */
  async setMintingPrice(price: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setMintingPrice({
      price,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the approved minting share extension
   * @param {string} extensionContractAddress - The contract address of the approved minting extension
   * @returns {ContractReceipt}
   */
  async setApprovedMintingExtension(extensionContractAddress: string) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setApprovedMintingExtension({
      extensionContractAddress,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Setup royalties to be paid to an address
   * @param {Object} params
   * @param {string} params.royaltyReceiverAddress Address of the receiver of the royalties
   * @param {number} params.royaltyPercentage The percentage between 0-1000 they will receive
   * @returns {ContractReceipt}
   */
  async setRoyalties(params: {
    royaltyReceiverAddress: string;
    royaltyPercentage: number;
  }) {
    invariant(this.signer, 'No signer set');

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
   * @param {number} params.salePrice Sale price to be retrieved
   * @returns {ContractReceipt}
   */
  async getRoyalties({ salePrice }: { salePrice: number }) {
    invariant(this.signer, 'No signer set');

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
   * @param {string} params.contractAddress Address of the contract
   * @param {Object[]} params.collaborator Array of collaborators
   * @param {string} params.collaborator[].address Address of the collaborator
   * @param {BigNumberish} params.collaborator[].share Share for the collaborator
   * @param {number} params.holderPercentage The holders percentage
   * @returns {ContractReceipt}
   */
  async setupRevenueSharing(params: {
    revShareExtensionAddress: string;
    collaborators: {
      address: string;
      share: BigNumberish;
    }[];
    holderPercentage: BigNumberish;
  }) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setupRevenueSharing({
      ...params,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Allocation of shares
   * @param {Object[]} params Array of accounts
   * @param {string} params[].address Address of the account
   * @param {BigNumberish} params[].share Allocated share for the account
   * @returns {ContractReceipt}
   */
  async allocateRevenueShares(
    params: {
      address: string;
      share: BigNumberish;
    }[]
  ) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.allocateRevenueShares({
      allocation: params,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Get the balance of a collaborator
   * @param {string} address Address of the collaborator
   * @returns {BigNumberish}
   */
  async getCollaboratorBalance(address: string) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getCollaboratorBalance({
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Withdrawl of collaborator funds
   * @param {string} address Address of the collaborator
   * @returns {ContractReceipt}
   */
  async withdrawCollaboratorFunds(address: string) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.withdrawCollaboratorFunds({
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Get the balance of a token
   * @param {BigNumberish} tokenId Token ID
   * @returns {BigNumberish}
   */
  async getTokenBalance(tokenId: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getTokenBalance({
      tokenId,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Withdrawl of token funds
   * @param {BigNumberish} tokenId Token ID
   * @returns {ContractReceipt}
   */
  async withdrawTokenFunds(tokenId: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.withdrawTokenFunds({
      tokenId,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the percentage of the primary commission
   * @param {BigNumberish} percent Percentage of primary commission
   * @returns {ContractReceipt}
   */
  async setPrimaryCommissionPercent(percent: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setPrimaryCommissionPercent({
      percent,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Gets the percentage of the primary commission
   * @returns {BigNumberish} The percentage of primary commission
   */
  async getPrimaryCommissionPercent() {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getPrimaryCommissionPercent({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the percentage of the secondary commission
   * @param {BigNumberish} percent Percentage of secondary commission
   * @returns {ContractReceipt}
   */
  async setSecondaryCommissionPercent(percent: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setSecondaryCommissionPercent({
      percent,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Gets the percentage of the secondary commission
   * @returns {BigNumberish} The percentage of secondary commission
   */
  async getSecondaryCommissionPercent() {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getSecondaryCommissionPercent({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the token sale price
   * @param {Object} params
   * @param {BigNumberish} params.tokenId Token ID
   * @param {BigNumberish} params.price Desired price of the token
   * @returns {ContractReceipt}
   */
  async setTokenSalePrice({
    tokenId,
    price,
  }: {
    tokenId: BigNumberish;
    price: BigNumberish;
  }) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setTokenSalePrice({
      tokenId,
      price,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Gets the token sale price
   * @param {BigNumberish} tokenId Token ID
   * @returns {BigNumberish} Token sale price
   */
  async getTokenSalePrice(tokenId: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getTokenSalePrice({
      tokenId,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Gets the creator of a token
   * @param {BigNumberish} tokenId Token ID
   * @returns {string} Creator of the token
   */
  async getTokenCreator(tokenId: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getTokenCreator({
      tokenId,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Gets the max supply
   * @returns {BigNumberish} Max supply
   */
  async getMaxSupply() {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getMaxSupply({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Sets the max supply
   * @param {BigNumberish} amount The maximum amount of the supply
   * @returns {ContractReceipt}
   */
  async setMaxSupply(amount: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.setMaxSupply({
      amount,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Gets the total supply
   * @returns {BigNumberish} Total supply
   */
  async getTotalSupply() {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.getTotalSupply({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Buy
   * @param {Object} params
   * @param {BigNumberish} params.tokenId Token ID
   * @returns {ContractReceipt}
   */
  async buy(tokenId: BigNumberish) {
    invariant(this.signer, 'No signer set');

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
   * @param {BigNumberish} params.tokenId Token ID
   * @param {number} params.address Address
   * @returns {ContractReceipt}
   */
  async buyWithCommission({
    tokenId,
    address,
  }: {
    tokenId: BigNumberish;
    address: string;
  }) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.buyWithCommission({
      tokenId,
      address,
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Toggle the paused state
   * @returns {ContractReceipt}
   */
  async togglePauseState() {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.togglePauseState({
      contractAddress: this.address,
      signer: this.signer,
    });
  }

  /**
   * Burn a token
   * @param {BigNumberish} tokenId Token ID
   * @returns {ContractReceipt}
   */
  async burn(tokenId: BigNumberish) {
    invariant(this.signer, 'No signer set');

    await this.checkNetworksMatch();

    return contract.burn({
      tokenId,
      contractAddress: this.address,
      signer: this.signer,
    });
  }
}
