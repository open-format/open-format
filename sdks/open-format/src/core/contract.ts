import base from '@simpleweb/open-format-contracts';
import { ethers, Signer } from 'ethers';
import { NFTMetadata } from '../types';
import { OpenFormat } from '../contract-types';

type ContractArgs = {
  contractAddress: string;
  signer: Signer;
};

function getContract({ contractAddress, signer }: ContractArgs) {
  return new ethers.Contract(contractAddress, base.abi, signer) as OpenFormat;
}

export async function mint({ contractAddress, signer }: ContractArgs) {
  const openFormat = getContract({ contractAddress, signer });

  const mintingPrice = await openFormat.mintingPrice();

  const tx = await openFormat['mint()']({
    value: mintingPrice,
  });

  const receipt = await tx.wait();

  return receipt;
}

export async function setRoyalties({
  contractAddress,
  signer,
  royaltyReceiverAddress,
  royaltyPercentage,
}: ContractArgs & {
  royaltyReceiverAddress: string;
  royaltyPercentage: number;
}) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat.setRoyalties(
    royaltyReceiverAddress,
    royaltyPercentage
  );

  const receipt = await tx.wait();

  return receipt;
}

export async function getRoyalties({
  contractAddress,
  signer,
  salePrice,
}: ContractArgs & { salePrice: number }) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat.royaltyInfo(0, salePrice);

  return tx;
}

export async function setupRevenueSharing({
  contractAddress,
  signer,
  collaborators,
  shares,
  holderPercentage,
}: ContractArgs & {
  contractAddress: string;
  collaborators: string[];
  shares: number[];
  holderPercentage: number;
}) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat.setApprovedRevShareExtension(
    contractAddress,
    collaborators,
    shares,
    holderPercentage
  );

  const receipt = await tx.wait();

  return receipt;
}

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
    ethers.utils.parseEther(nft.mintingPrice.toString())
  );

  const receipt = await contract.deployTransaction.wait();

  return receipt;
}
