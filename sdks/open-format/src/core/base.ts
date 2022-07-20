import { providers, Signer } from 'ethers';

export class BaseContract {
  provider: providers.Provider;
  signer: Signer | undefined;

  constructor(provider: providers.Provider, signer?: Signer) {
    this.provider = provider;
    this.signer = signer;
  }

  /**
   * Throws an error if the current signer and provider's networks differ
   * @private
   */
  protected async checkNetworksMatch() {
    if (this.signer) {
      const signerNetwork = await this.signer.provider?.getNetwork();
      const providerNetwork = await this.provider.getNetwork();

      if (signerNetwork?.chainId !== providerNetwork.chainId) {
        throw new Error(`Chains don't match`);
      }
    }
  }
}
