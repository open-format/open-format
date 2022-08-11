---
title: Hooks
---

<a name="useBurn"></a>

## useBurn(nft)
<p>Hook to burn a token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, burn } = useBurn(nft);
```

[SDK: Burn](/js/nft.md#burn)
<a name="useBuy"></a>

## useBuy(nft)
<p>Hook to buy</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, buy } = useBuy(nft);
```
<a name="useBuyWithCommission"></a>

## useBuyWithCommission(nft)
<p>Hook to buy with commission</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, buyWithCommission } = useBuyWithCommission(nft);
```
<a name="useDeploy"></a>

## useDeploy()
<p>Hook to get the deploy function from the SDK</p>

**Kind**: global function  
**Example**  
```tsx
const { ...mutation, deploy } = useDeploy();
```
<a name="useGetCollaboratorBalance"></a>

## useGetCollaboratorBalance(nft, address) ⇒ <code>UseQueryResult</code>
<p>Hook to get the balance of a collaborator</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |
| address | <code>string</code> | <p>Address of the collaborator</p> |

<a name="useGetMaxSupply"></a>

## useGetMaxSupply(nft) ⇒ <code>UseQueryResult</code>
<p>Hook to get max supply</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

<a name="useGetPrimaryCommissionPercent"></a>

## useGetPrimaryCommissionPercent(nft) ⇒ <code>UseQueryResult</code>
<p>Hook to get primary commission percentage</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

<a name="useGetSecondaryCommissionPercent"></a>

## useGetSecondaryCommissionPercent(nft) ⇒ <code>UseQueryResult</code>
<p>Hook to get secondary commission percentage</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

<a name="useGetTokenBalance"></a>

## useGetTokenBalance(nft, tokenId) ⇒ <code>UseQueryResult</code>
<p>Hook to get the balance of a token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="useGetTokenCreator"></a>

## useGetTokenCreator(nft, tokenId) ⇒ <code>UseQueryResult</code>
<p>Hook to get the creator of a token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="useGetTokenSalePrice"></a>

## useGetTokenSalePrice(nft, tokenId) ⇒ <code>UseQueryResult</code>
<p>Hook to get the sale price of a token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="useGetTotalSupply"></a>

## useGetTotalSupply(nft) ⇒ <code>UseQueryResult</code>
<p>Hook to get the total supply</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

<a name="useMint"></a>

## useMint(nft)
<p>Hook to mint</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, mint } = useMint(nft);
```
<a name="useMintWithCommission"></a>

## useMintWithCommission(nft)
<p>Hook to mint with commission</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, mintWithCommission } = useMintWithCommission(nft);
```
<a name="useNFT"></a>

## useNFT(address) ⇒
<p>Hook to return a new instance of an OpenFormatNFT</p>

**Kind**: global function  
**Returns**: <p>OpenFormatNFT</p>  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | <p>Address of a deployed Open Format contract</p> |

<a name="useRawRequest"></a>

## useRawRequest(options) ⇒ <code>any</code>
<p>Performs a custom query against the subgraph</p>

**Kind**: global function  
**Returns**: <code>any</code> - <p>Data from the subgraph</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | <p>A GraphQL query</p> |

<a name="useRevenueSharingAllocation"></a>

## useRevenueSharingAllocation(nft)
<p>Hook to allocate revenue shares</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, allocate } = useRevenueSharingAllocation(nft);
```
<a name="useRoyalties"></a>

## useRoyalties(nft, salePrice) ⇒ <code>UseQueryResult</code>
<p>Hook to get the sale price of a token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |
| salePrice | <code>number</code> | <p>Sale Price</p> |

<a name="useSaleData"></a>

## useSaleData(nft, options) ⇒ <code>UseQueryResult</code>
<p>Hook to get sales data for a specific token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |
| options | <code>Object</code> | <p>Sale Price</p> |

<a name="useSetMaxSupply"></a>

## useSetMaxSupply(nft)
<p>Hook to set the max supply</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setMaxSupply } = useSetMaxSupply(nft);
```
<a name="useSetMintingPrice"></a>

## useSetMintingPrice(nft)
<p>Hook to set the price of minting</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setMintingPrice } = useSetMintingPrice(nft);
```
<a name="useSetPrimaryCommissionPercentage"></a>

## useSetPrimaryCommissionPercentage(nft)
<p>Hook to set the percentage of the primary commission</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setPrimaryCommissionPercent } = useSetPrimaryCommissionPercentage(nft);
```
<a name="useSetRoyalties"></a>

## useSetRoyalties(nft)
<p>Hook to setup royalties to be paid to an address</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setRoyalties } = useSetRoyalties(nft);
```
<a name="useSetSecondaryCommissionPercentage"></a>

## useSetSecondaryCommissionPercentage(nft)
<p>Hook to set the percentage of the secondary commission</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setSecondaryCommissionPercentage } = useSetSecondaryCommissionPercentage(nft);
```
<a name="useSetTokenSalePrice"></a>

## useSetTokenSalePrice(nft)
<p>Hook to set the sale proce of a token</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setTokenSalePrice } = useSetTokenSalePrice(nft);
```
<a name="useSetupRevenueSharing"></a>

## useSetupRevenueSharing(nft)
<p>Hook to setup revenue sharing</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, setup } = useSetupRevenueSharing(nft);
```
<a name="useTogglePauseState"></a>

## useTogglePauseState(nft)
<p>Hook to toggle the paused state</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, togglePauseState } = useTogglePauseState(nft);
```
<a name="useTokens"></a>

## useTokens() ⇒ <code>UseQueryResult</code>
<p>Hook to get token data</p>

**Kind**: global function  
<a name="useWallet"></a>

## useWallet()
<p>Hook to get the wallet state</p>

**Kind**: global function  
**Example**  
```tsx
const { isConnected, wallet } = useWallet();
```
<a name="useWithdrawCollaboratorFunds"></a>

## useWithdrawCollaboratorFunds(nft)
<p>Hook to withdraw collaborator funds</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, withdraw } = useWithdrawCollaboratorFunds(nft);
```
<a name="useWithdrawTokenFunds"></a>

## useWithdrawTokenFunds(nft)
<p>Hook to withdraw token funds</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| nft | <code>OpenFormatNFT</code> | <p>A deployed NFT instance</p> |

**Example**  
```tsx
const { ...mutation, withdraw } = useWithdrawTokenFunds(nft);
```
