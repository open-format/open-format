---
title: What is Open Format?
---

## How it works

At its core, Open Format comprises of two fundamental principles. Creating NFTs and reading NFTs. This section explains how this works within the Open Format protocol.

![](/img/open-format.gif)

## Creating an NFT

An NFT is a non-fungible token, which is a digital representation of a unique item. This can be anything from artwork or music to a piece of material going through a supply chain.

When an NFT is created, an entry is permanently added to the blockchain. This is similar to adding an entry into a database in the web2 world.

### Creation

Creation is the entry point into the Open Format protocol. To create an NFT collection it needs to be deployed on chain. Open Format is currently available on the Polygon Mainnet and Polygon Mumbai networks. To create an NFT collection, you need to deploy a clone of our main contract. The [OpenFormat.sol](https://github.com/simpleweb/open-format-contracts/blob/main/contracts/OpenFormat.sol) contract is a [ERC721](https://docs.openzeppelin.com/contracts/3.x/erc721) contract on steroids, allowing developers to create an environment that makes it quick and easy to create highly customisable, data rich NFTs.

As a developer, you can build a factory to enable creators to create their NFT collections.

## Minting

Minting an NFT is the process of creating a permanent entry for an asset on a blockchain. Each time an NFT is minted, a reference is created between the holder and the NFT contract in the form of a token id. Owners of NFTs have special privileges relating to their assign token id.

In the context of Open Format, the owner of a NFT can transfer, sell, burn and receive revenue shares.

On the other hand, the minting process can create revenue for creators and marketplace owners via a sales commission.

## Metadata

Metadata is one of the key features that makes the Open Format protocol so powerful. It allows any data to be stored against an NFT. When an NFT is created, a metadata URL is passed as a parameter into the deploy function. This metadata URL returns a JSON blob of data with the metadata for your NFT. For now, we only support metadata store on [IPFS](https://ipfs.io/).

Once the NFT is deployed, our [subgraph](https://thegraph.com/hosted-service/subgraph/simpleweb/open-format) reads the associated metadata URL, generates a list of properties (e.g name, description, image, video url etc) and stores it against the NFT. The metadata can then be filtered and sorted in a frontend app.

This enables developers to create highly customisable, scoped frontends for displaying NFTs created in the Open Format ecosystem.

## Buying and Selling

Buying and selling of NFT's happens on a secondary marketplace. It enables owners of an NFT to resell the NFT. We want NFT owners to be able to sell on any secondary market, so we've written contracts in a way to enable this. If you're building your own marketplace using the Open Format protocol, we provide a few helpful functions.



## Use cases

* You're a musician who wants to release your music as an NFT and create a marketplace for your fans to trade your music.
* You're an agency and want to create custom branded minting and marketplace experiences for your clients.
* You're in a band or have collaborated on some work and want to release an NFT where any earnings can be automatically split between multiple parties.
* You're part of a community who wants to release a NFT where a percentage of the earnings goes back to NFT holders.
* You want to create a decentralised video platform similar to YouTube.
