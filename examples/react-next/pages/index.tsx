import {
  useDeploy,
  useMint,
  useNFT,
  useRawRequest,
  useSaleData,
  useWallet
} from "@simpleweb/open-format-react";
import { gql } from "graphql-request";
import { NextPage } from "next";

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

  const {
    deploy,
    isLoading: isDeploying,
    data: deployedContract
  } = useDeploy();

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

  return (
    <div>
      <h1>Open Format React</h1>

      {isConnected && (
        <div>
          <button onClick={handleDeploy}>
            {isDeploying ? "Deploying..." : "Deploy"}
          </button>
        </div>
      )}

      {deployedContract && (
        <>
          <Nft address={deployedContract.contractAddress} />
        </>
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

function Nft({ address }: { address: string }) {
  const nft = useNFT(address);

  const { mint } = useMint(nft);

  async function handleMint() {
    try {
      await mint();
    } catch (error) {
      console.log("handleDeploy", error);
    }
  }
  return (
    <>
      <p>NFT: {address}</p>
      <button onClick={handleMint}>Mint</button>
    </>
  );
}

export default Home;
