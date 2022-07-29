# Reading from the Subgraph

Following on from the [Creating an NFT](creating-nft.md) section, add a file called `subgraph.js`. Here we create a new instance of the SDK and construct a GraphQL query against the [Open Format Subgraph](https://api.thegraph.com/subgraphs/name/simpleweb/open-format/graphql).

{% code title="subgraph.js" %}
```typescript
import { OpenFormatSDK } from "@simpleweb/open-format";
import { gql } from "graphql-request";

const sdk = new OpenFormatSDK({
  network: "mumbai",
  signer: "0x..."
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
```
{% endcode %}

Save the file and run `node subgraph.js`. You should see a list of `mediaItems` logged in your console.

```json
{
  "tokens": [
    {
      "id": "0x04acaf7c247f0165413cfae4065fefe3a0969d42",
      "saleData": {
        "maxSupply": "100",
        "totalEarnings": "0",
        "salePrice": "10000000000000000",
        "createdAt": "1652180567"
      }
    },
    {
      "id": "0x13894a26440b5e4e21c31a4a7dd2a8f19d4d9c09",
      "saleData": {
        "maxSupply": "100",
        "totalEarnings": "0",
        "salePrice": "10000000000000000",
        "createdAt": "1652181170"
      }
    },
    {
      "id": "0x2f29b169e559e2808b7a6dfcb4029e1fdc30b2ac",
      "saleData": {
        "maxSupply": "100",
        "totalEarnings": "0",
        "salePrice": "10000000000000000",
        "createdAt": "1652186017"
      }
    }
  ]
}
```

Now let's find your NFT collection. For this, you will need the contract address of your NFT collection. You can get this from [PolygonScan (Mumbai) explorer](https://mumbai.polygonscan.com/).

Now let's go back into the `subgraph.js` file. We can use the `getSaleDataForToken` method to get the sale data for you token by passing it your contract address (see below where your address will be on the [Polygonscan (Mumbai) explorer](https://mumbai.polygonscan.com/)).

![](../../polygonscan-subgraph.png)

{% code title="subgraph.js" %}
```typescript
const saleData = await sdk.getSaleDataForToken(
  "0x15cec45a78a7a1dc8c05159891972cc260116cb2"
);

console.log(saleData);
```
{% endcode %}

Save the file and run `node subgraph.js`. You should now only see your NFT logged in the console.

```json
{
  "token": {
    "id": "0x04acaf7c247f0165413cfae4065fefe3a0969d42",
    "saleData": {
      "maxSupply": "100",
      "totalEarnings": "0",
      "salePrice": "10000000000000000",
      "createdAt": "1652180567"
    }
  }
}
```

Congratulations! Now go build something awesome!
