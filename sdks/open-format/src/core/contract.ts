import base from '@simpleweb/open-format-contracts';
import { ethers, BigNumberish, Signer } from 'ethers';
import { NFTMetadata } from '../types';
import { OpenFormat } from '../contract-types';
import isZeroAddress from '../helpers/zeroAddress';

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
  revShareExtensionAddress,
  collaborators,
  holderPercentage,
}: ContractArgs & {
  revShareExtensionAddress: string;
  collaborators: {
    address: string;
    share: BigNumberish;
  }[];
  holderPercentage: BigNumberish;
}) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat.setApprovedRevShareExtension(
    revShareExtensionAddress,
    collaborators.map(collaborator => collaborator.address),
    collaborators.map(collaborator => collaborator.share),
    holderPercentage
  );

  const receipt = await tx.wait();

  return receipt;
}

export async function allocateRevenueShares({
  allocation,
  contractAddress,
  signer,
}: ContractArgs & {
  allocation: {
    address: string;
    share: BigNumberish;
  }[];
}) {
  const openFormat = getContract({ contractAddress, signer });
  const approved = await openFormat.approvedRevShareExtension();

  if (isZeroAddress(approved)) {
    throw new Error(`Revenue sharing has not been setup`);
  }

  const tx = await openFormat.allocateShares(
    allocation.map(a => a.address),
    allocation.map(a => a.share)
  );

  const receipt = await tx.wait();

  return receipt;
}

export async function withdrawCollaboratorFunds({
  address,
  contractAddress,
  signer,
}: ContractArgs & { address: string }) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat['withdraw(address)'](address);

  const receipt = await tx.wait();

  return receipt;
}

export async function getCollaboratorBalance({
  address,
  contractAddress,
  signer,
}: ContractArgs & { address: string }) {
  const openFormat = getContract({ contractAddress, signer });

  const balance = await openFormat.getSingleCollaboratorBalance(address);

  return balance;
}

export async function getTokenBalance({
  token,
  contractAddress,
  signer,
}: ContractArgs & { token: BigNumberish }) {
  const openFormat = getContract({ contractAddress, signer });

  const balance = await openFormat.getSingleTokenBalance(token);

  return balance;
}

export async function withdrawTokenFunds({
  token,
  contractAddress,
  signer,
}: ContractArgs & { token: BigNumberish }) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat['withdraw(uint256)'](token);

  const receipt = await tx.wait();

  return receipt;
}

export async function setPrimaryCommissionPercent({
  percent,
  contractAddress,
  signer,
}: ContractArgs & { percent: BigNumberish }) {
  const openFormat = getContract({ contractAddress, signer });

  const tx = await openFormat.setPrimaryCommissionPct(percent);

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
