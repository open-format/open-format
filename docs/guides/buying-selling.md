# Buying and Selling

There are two functions that can be called in the OpenFormat contract. We're using function overloading for buying and selling so the syntax for calling the function is slightly different.

## Buy

This will handle the purchasing (transferring of funds and token) between the old owner and the new owner of the NFT for sale. You need to pass in the token id and the value needs to be the same as the token sale price. You can get the token sale price by calling the contract.

```tsx
await nft.buy(tokenId);
```


## Buy with a sales commission

This will do everything the buy function does above, but sends a sale commission to the stated commission receiver address. You can get the sales commission amount from the contract. It needs to be added onto the token sale price.

```tsx
await nft.buyWithCommission({
  tokenId,
  address,
});
```

* The token sale price must be greater than zero. If you want to give it away for free, just transfer the tokens directly to the recipient.
