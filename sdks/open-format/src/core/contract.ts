import base from '@simpleweb/open-format-contracts/abis/OpenFormat.json';
import { ethers, Signer } from 'ethers';
import { NFTMetadata } from '../types';

/**
 * Deploys a version of the Open Format contract
 * @private
 * @param {Object} params - the signer and nft for the deploy
 * @param {Signer} params.signer - signer of the contract
 * @param {NFTMetadata} params.nft - metadata about the NFT to deploy
 * @returns receipt
 */
export async function deploy({
  signer,
  nft,
}: {
  signer: Signer;
  nft: NFTMetadata;
}) {
  const openFormatContract = new ethers.ContractFactory(
    base.abi,
    base.bytecode,
    signer
  );

  const contract = await openFormatContract.deploy(
    nft.name,
    nft.symbol,
    nft.url,
    nft.maxSupply,
    ethers.utils.parseEther(nft.mintingPrice)
  );

  const receipt = await contract.deployTransaction.wait();

  return receipt;
}
