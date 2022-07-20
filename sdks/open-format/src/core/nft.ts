import { providers, Signer } from 'ethers';
import * as contract from './contract';

export class OpenFormatNFT {
  address: string;
  provider: providers.Provider;
  signer: Signer;

  constructor(address: string, provider: providers.Provider, signer: Signer) {
    this.address = address;
    this.provider = provider;
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
