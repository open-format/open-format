import base from '@simpleweb/open-format-contracts/abis/OpenFormat.json';
import { ethers } from 'ethers';

/**
 * Deploys a version of the Open Format contract
 * @param deployOptions
 * @returns
 */
export async function deploy({
  RPC_URL,
  WALLET_PRIVATE_KEY,
  nft,
}: {
  RPC_URL: string;
  WALLET_PRIVATE_KEY: string;
  nft: {
    name: string;
    symbol: string;
    url: string;
    maxSupply: number;
    mintingPrice: string;
  };
}) {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

  const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);

  const account = wallet.connect(provider);

  const openFormatContract = new ethers.ContractFactory(
    base.abi,
    base.bytecode,
    account
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
