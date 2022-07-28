# Hooks

### Functions

[useBurn(nft)](hooks.md#useBurn)

Hook to burn a token

[useBuy(nft)](hooks.md#useBuy)

Hook to buy

[useBuyWithCommission(nft)](hooks.md#useBuyWithCommission)

Hook to buy with commission

[useDeploy()](hooks.md#useDeploy)

Hook to get the deploy function from the SDK

[useGetCollaboratorBalance(nft, address)](hooks.md#useGetCollaboratorBalance) ⇒ `UseQueryResult`

Hook to get the balance of a collaborator

[useGetMaxSupply(nft)](hooks.md#useGetMaxSupply) ⇒ `UseQueryResult`

Hook to get max supply

[useGetPrimaryCommissionPercent(nft)](hooks.md#useGetPrimaryCommissionPercent) ⇒ `UseQueryResult`

Hook to get primary commission percentage

[useGetSecondaryCommissionPercent(nft)](hooks.md#useGetSecondaryCommissionPercent) ⇒ `UseQueryResult`

Hook to get secondary commission percentage

[useGetTokenBalance(nft, tokenId)](hooks.md#useGetTokenBalance) ⇒ `UseQueryResult`

Hook to get the balance of a token

[useGetTokenCreator(nft, tokenId)](hooks.md#useGetTokenCreator) ⇒ `UseQueryResult`

Hook to get the creator of a token

[useGetTokenSalePrice(nft, tokenId)](hooks.md#useGetTokenSalePrice) ⇒ `UseQueryResult`

Hook to get the sale price of a token

[useGetTotalSupply(nft)](hooks.md#useGetTotalSupply) ⇒ `UseQueryResult`

Hook to get the total supply

[useMint(nft)](hooks.md#useMint)

Hook to mint

[useMintWithCommission(nft)](hooks.md#useMintWithCommission)

Hook to mint with commission

[useNFT(address)](hooks.md#useNFT) ⇒

Hook to return a new instance of an OpenFormatNFT

[useRawRequest(options)](hooks.md#useRawRequest) ⇒ `any`

Performs a custom query against the subgraph

[useRevenueSharingAllocation(nft)](hooks.md#useRevenueSharingAllocation)

Hook to allocate revenue shares

[useRoyalties(nft, salePrice)](hooks.md#useRoyalties) ⇒ `UseQueryResult`

Hook to get the sale price of a token

[useSaleData(nft, options)](hooks.md#useSaleData) ⇒ `UseQueryResult`

Hook to get sales data for a specific token

[useSetMaxSupply(nft)](hooks.md#useSetMaxSupply)

Hook to set the max supply

[useSetMintingPrice(nft)](hooks.md#useSetMintingPrice)

Hook to set the price of minting

[useSetPrimaryCommissionPercentage(nft)](hooks.md#useSetPrimaryCommissionPercentage)

Hook to set the percentage of the primary commission

[useSetRoyalties(nft)](hooks.md#useSetRoyalties)

Hook to setup royalties to be paid to an address

[useSetSecondaryCommissionPercentage(nft)](hooks.md#useSetSecondaryCommissionPercentage)

Hook to set the percentage of the secondary commission

[useSetTokenSalePrice(nft)](hooks.md#useSetTokenSalePrice)

Hook to set the sale proce of a token

[useSetupRevenueSharing(nft)](hooks.md#useSetupRevenueSharing)

Hook to setup revenue sharing

[useTogglePauseState(nft)](hooks.md#useTogglePauseState)

Hook to toggle the paused state

[useTokens()](hooks.md#useTokens) ⇒ `UseQueryResult`

Hook to get token data

[useWallet()](hooks.md#useWallet)

Hook to get the wallet state

[useWithdrawCollaboratorFunds(nft)](hooks.md#useWithdrawCollaboratorFunds)

Hook to withdraw collaborator funds

[useWithdrawTokenFunds(nft)](hooks.md#useWithdrawTokenFunds)

Hook to withdraw token funds

### useBurn(nft)

Hook to burn a token

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, burn } = useBurn(nft);
```

[SDK: Burn](../../../js/nft.md#burn)

### useBuy(nft)

Hook to buy

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, buy } = useBuy(nft);
```

### useBuyWithCommission(nft)

Hook to buy with commission

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, buyWithCommission } = useBuyWithCommission(nft);
```

### useDeploy()

Hook to get the deploy function from the SDK

**Kind**: global function\
**Example**

```tsx
const { ...mutation, deploy } = useDeploy();
```

### useGetCollaboratorBalance(nft, address) ⇒ `UseQueryResult`

Hook to get the balance of a collaborator

**Kind**: global function

| Param   | Type            | Description                 |
| ------- | --------------- | --------------------------- |
| nft     | `OpenFormatNFT` | A deployed NFT instance     |
| address | `string`        | Address of the collaborator |

### useGetMaxSupply(nft) ⇒ `UseQueryResult`

Hook to get max supply

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

### useGetPrimaryCommissionPercent(nft) ⇒ `UseQueryResult`

Hook to get primary commission percentage

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

### useGetSecondaryCommissionPercent(nft) ⇒ `UseQueryResult`

Hook to get secondary commission percentage

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

### useGetTokenBalance(nft, tokenId) ⇒ `UseQueryResult`

Hook to get the balance of a token

**Kind**: global function

| Param   | Type            | Description             |
| ------- | --------------- | ----------------------- |
| nft     | `OpenFormatNFT` | A deployed NFT instance |
| tokenId | `BigNumberish`  | Token ID                |

### useGetTokenCreator(nft, tokenId) ⇒ `UseQueryResult`

Hook to get the creator of a token

**Kind**: global function

| Param   | Type            | Description             |
| ------- | --------------- | ----------------------- |
| nft     | `OpenFormatNFT` | A deployed NFT instance |
| tokenId | `BigNumberish`  | Token ID                |

### useGetTokenSalePrice(nft, tokenId) ⇒ `UseQueryResult`

Hook to get the sale price of a token

**Kind**: global function

| Param   | Type            | Description             |
| ------- | --------------- | ----------------------- |
| nft     | `OpenFormatNFT` | A deployed NFT instance |
| tokenId | `BigNumberish`  | Token ID                |

### useGetTotalSupply(nft) ⇒ `UseQueryResult`

Hook to get the total supply

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

### useMint(nft)

Hook to mint

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, mint } = useMint(nft);
```

### useMintWithCommission(nft)

Hook to mint with commission

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, mintWithCommission } = useMintWithCommission(nft);
```

### useNFT(address) ⇒

Hook to return a new instance of an OpenFormatNFT

**Kind**: global function\
**Returns**:

OpenFormatNFT

| Param   | Type     | Description                                |
| ------- | -------- | ------------------------------------------ |
| address | `string` | Address of a deployed Open Format contract |

### useRawRequest(options) ⇒ `any`

Performs a custom query against the subgraph

**Kind**: global function\
**Returns**: `any` -

Data from the subgraph

| Param   | Type     | Description     |
| ------- | -------- | --------------- |
| options | `Object` | A GraphQL query |

### useRevenueSharingAllocation(nft)

Hook to allocate revenue shares

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, allocate } = useRevenueSharingAllocation(nft);
```

### useRoyalties(nft, salePrice) ⇒ `UseQueryResult`

Hook to get the sale price of a token

**Kind**: global function

| Param     | Type            | Description             |
| --------- | --------------- | ----------------------- |
| nft       | `OpenFormatNFT` | A deployed NFT instance |
| salePrice | `number`        | Sale Price              |

### useSaleData(nft, options) ⇒ `UseQueryResult`

Hook to get sales data for a specific token

**Kind**: global function

| Param   | Type            | Description             |
| ------- | --------------- | ----------------------- |
| nft     | `OpenFormatNFT` | A deployed NFT instance |
| options | `Object`        | Sale Price              |

### useSetMaxSupply(nft)

Hook to set the max supply

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setMaxSupply } = useSetMaxSupply(nft);
```

### useSetMintingPrice(nft)

Hook to set the price of minting

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setMintingPrice } = useSetMintingPrice(nft);
```

### useSetPrimaryCommissionPercentage(nft)

Hook to set the percentage of the primary commission

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setPrimaryCommissionPercent } = useSetPrimaryCommissionPercentage(nft);
```

### useSetRoyalties(nft)

Hook to setup royalties to be paid to an address

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setRoyalties } = useSetRoyalties(nft);
```

### useSetSecondaryCommissionPercentage(nft)

Hook to set the percentage of the secondary commission

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setSecondaryCommissionPercentage } = useSetSecondaryCommissionPercentage(nft);
```

### useSetTokenSalePrice(nft)

Hook to set the sale proce of a token

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setTokenSalePrice } = useSetTokenSalePrice(nft);
```

### useSetupRevenueSharing(nft)

Hook to setup revenue sharing

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, setup } = useSetupRevenueSharing(nft);
```

### useTogglePauseState(nft)

Hook to toggle the paused state

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, togglePauseState } = useTogglePauseState(nft);
```

### useTokens() ⇒ `UseQueryResult`

Hook to get token data

**Kind**: global function\


### useWallet()

Hook to get the wallet state

**Kind**: global function\
**Example**

```tsx
const { isConnected, wallet } = useWallet();
```

### useWithdrawCollaboratorFunds(nft)

Hook to withdraw collaborator funds

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, withdraw } = useWithdrawCollaboratorFunds(nft);
```

### useWithdrawTokenFunds(nft)

Hook to withdraw token funds

**Kind**: global function

| Param | Type            | Description             |
| ----- | --------------- | ----------------------- |
| nft   | `OpenFormatNFT` | A deployed NFT instance |

**Example**

```tsx
const { ...mutation, withdraw } = useWithdrawTokenFunds(nft);
```
