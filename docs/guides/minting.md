# Minting

There are two functions that can be called in the OpenFormat contract. We're using function overloading for minting so the syntax for calling the function is slightly different.

### Mint

This will mint an NFT and send it to the wallet of the sender.

```tsx
await nft.mint()
```

### Mint with a sales commission

This will mint an NFT, send it to the wallet of the sender and also send a percentage of the send value to the wallet address passed into the function.

```tsx
await nft.mintWithCommission(commissionReceiverAddress);
```

* You can get the `mintingPrice` from the contract or you can read it in the subgraph.
* The `msg.value` must be greater than the `mintingPrice`.
