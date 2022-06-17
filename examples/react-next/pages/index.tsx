import { NextPage } from "next";
import {
  ConnectButton,
  useDeploy,
  useRawRequest,
  useSaleData,
  useWallet
} from "@simpleweb/open-format-react";
import { gql } from "graphql-request";
import { useMint } from "@simpleweb/open-format-react";

const Home: NextPage = () => {
  const { isConnected } = useWallet();

  const saleData = useSaleData({
    tokenId: "0x021d35cd4849596f1013cf92f718ec7bf5541bc2"
  });

  const rawData = useRawRequest({
    query: gql`
      {
        tokens {
          id
        }
      }
    `
  });

  const { deploy, data: deployedContract } = useDeploy();

  async function handleDeploy() {
    try {
      await deploy({
        maxSupply: 100,
        mintingPrice: 0.01,
        name: "Test",
        symbol: "TEST",
        url: "ipfs://"
      });
    } catch (error) {
      console.log("handleDeploy", error);
    }
  }

  const { mint } = useMint();

  async function handleMint() {
    try {
      if (typeof deployedContract?.contractAddress !== "string") {
        throw new Error("Contract address not sent");
      }

      await mint({ contractAddress: deployedContract.contractAddress });
    } catch (error) {
      console.log("handleDeploy", error);
    }
  }

  return (
    <div>
      <h1>Open Format React</h1>

      <div>
        <ConnectButton />
      </div>

      {isConnected && (
        <div>
          <button onClick={handleDeploy}>Deploy NFT</button>
        </div>
      )}

      {deployedContract && (
        <div>
          <button onClick={handleMint}>Mint NFT</button>
        </div>
      )}

      {saleData.isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(saleData.data, null, 2)}</pre>
      )}

      {rawData.isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{JSON.stringify(rawData.data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Home;
