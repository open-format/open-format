import { OpenFormatSDK } from "@simpleweb/open-format";
import { gql } from "graphql-request";

const sdk = new OpenFormatSDK({
  network: "mumbai",
  signer: "YOUR_PRIVATE_KEY"
});

const query = gql`
  {
    tokens {
      id
      saleData {
        maxSupply
        totalEarnings
        salePrice
        createdAt
      }
    }
  }
`;

const result = await sdk.rawRequest(query);

console.log(result);

const saleData = await sdk.getSaleDataForToken(
  "0x15cec45a78a7a1dc8c05159891972cc260116cb2"
);

console.log(saleData);
