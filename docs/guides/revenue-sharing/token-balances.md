# Token Balances

## Get single token balance

Use this function to get the native token (ETH/MATIC) balance of a single token (NFT)

```typescript
await openFormatContract["getSingleTokenBalance(address,uint256)"](
  openFormatContract.address,
  tokenId
);
```

## Get single token balance ERC20

Use this function to get an ERC20 balance of a single token (NFT)

```typescript
await openFormatContract["getSingleTokenBalance(address,address,uint256)"](
  ERC20ContractAddress,
  openFormatContract.address,
  tokenId
);
```
