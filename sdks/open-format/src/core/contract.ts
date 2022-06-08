import base from '@simpleweb/open-format-contracts/abis/OpenFormat.json';
import { ethers, Signer } from 'ethers';

export interface NFTMetadata {
  name: string;
  symbol: string;
  url: string;
  maxSupply: number;
  mintingPrice: string;
}

/**
 * Deploys a version of the Open Format contract
 * @param deployOptions
 * @returns
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
