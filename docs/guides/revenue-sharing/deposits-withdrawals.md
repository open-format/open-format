# Deposits and withdrawals

Before deposits can be accepted an `approvedDepositExtension` must be set. This is the address of a previously deployed [deposit extension contract](https://mumbai.polygonscan.com/address/0xE3867309a675F20602AF207b912772FFD066CF77). Our deposit extension contract is simply calculating and storing how much of each deposit value every NFT holder is entitled to. NFT holders can then withdraw their balance at anytime.

Once the `approvedDepositExtension` is set, deposits are handled via one of two deposit functions. One for handling native token (ETH/MATIC) deposits and the other for handling ERC20 token deposits. This is the same for withdrawals.

## Setup

### Set approved deposit extension

This function will set the `approvedDepositExtension` variable in the NFT contract. When a `deposit` or `withdraw` function is called, the set `approvedDepositExtension` contract will be called to handle the request.

```typescript
await openFormatContract.setApprovedDepositExtension("0x2F1e29Ab4599c71360AaB7dbD17eBd7E0Fa20e59");
```

### Deployed Deposit Extensions

Below is a list of deployed deposit extension contracts.

#### Polygon Mumbai

| **Contract**     | **Address**                                |
|------------------|--------------------------------------------|
| DepositExtension | 0x2F1e29Ab4599c71360AaB7dbD17eBd7E0Fa20e59 |


#### Polygon Mainnet

| **Contract**     | **Address**                                |
|------------------|--------------------------------------------|
| DepositExtension | 0xe68620564F32045F90D80C195FFEB26315BdaF1e |


### Deposits

Use this function to send native tokens (ETH/MATIC) to the NFT contract to be split between the current NFT holders.


```typescript
await openFormatContract["deposit()"]({ value });
```

### DepositERC20

Use this function to send ERC20 tokens to the NFT contract which can then be split between the current NFT holders.


{% hint style="warning" %}
When depositing, the NFT contract must have `allowance()` to spend funds on behalf of `msg.sender` for the amount for the asset being deposited. This can be done via the standard ERC20 `approve()` method.
{% endhint %}

```typescript
await openFormatContract["deposit(address,uint256)"](
  ERC20ContractAddress,
  value
);
```

## Withdrawals

{% hint style="warning" %}
Only the token holder or approved address can withdraw funds for a single token (NFT). Approvals can be done via the standard ERC721 approve() method.
{% endhint %}


### Withdraw

Use this function to withdraw native tokens (ETH/MATIC) from the balance of a single NFT. You need to pass in the `tokenId` of the NFT you wish to withdraw funds from.

```typescript
await openFormatContract["withdraw(uint256)"](tokenId);
```

### WithdrawERC20

Use this function to withdraw native tokens (ETH/MATIC) from the balance of a single NFT. You need to pass in the `ERC20` address of the token you wish to withdraw and the `tokenId` of the NFT you wish to withdraw funds from.

```typescript
await openFormatContract["withdraw(address,uint256)"](
  ERC20ContractAddress,
  tokenId
);
```
