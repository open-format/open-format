# Glossary

## Signer

Simply put a signer is just the account that manages transactions, more information on this can be found [here](https://docs.ethers.io/v5/api/signer/).

## Networks

Networks are different Ethereum environments you can access for a variety of use cases.

The network used in the example above (mumbai) is one of the _**Polygon**_ testnet networks where we can be used as a sandbox to test actions on the chain before deploying to mainnet (where real asset transactions occur).

More information on networks can be found [here](https://ethereum.org/en/developers/docs/networks/).

## Polygon

Polygon is a side-chain built alongside its parent chain, in our case ethereum. It has specific benefits such as enhanced speed and reduced cost. More information on polygon can be found [here.](https://docs.polygon.technology/)

## Subgraph

Querying data from projects that have high complexity (such as NFT's) is made easy using the subgraph which leverages a GraphQL endpoint to query data. Our subgraph is setup to query data about any NFT created with the Open Format protocol.

More information on the graph can be found in the documentation [here.](https://thegraph.com/docs/en/about/)

## ERC721 standard

ERC721 is a more complex standard than ERC20, with multiple optional extensions, and is split across a number of contracts. Check out the [API Reference](https://docs.openzeppelin.com/contracts/3.x/api/token/ERC721) to learn more about these.
