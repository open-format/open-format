import { NextPage } from "next";
import {
  ConnectButton,
  useDeploy,
  useRawRequest,
  useSaleData
} from "@simpleweb/open-format-react";
import { gql } from "graphql-request";

const Home: NextPage = () => {
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

  const { deploy } = useDeploy();

  return (
    <div>
      <h1>Open Format React</h1>

      <div>
        <ConnectButton />
      </div>

      <div>
        <button
          onClick={() => {
            deploy({
              maxSupply: 100,
              mintingPrice: 0.01,
              name: "Test",
              symbol: "TEST",
              url: "ipfs://"
            });
          }}
        >
          Deploy NFT
        </button>
      </div>

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
