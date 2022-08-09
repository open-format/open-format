<a name="OpenFormatNFT"></a>

## OpenFormatNFT
<p>Creates a new instances of the OpenFormatNFT class which allows you to interact with a single deployed NFT</p>

**Kind**: global class  
**Access**: public  

* [OpenFormatNFT](#OpenFormatNFT)
    * [.mint()](#OpenFormatNFT+mint) ⇒ <code>ContractReceipt</code>
    * [.mintWithCommission(address)](#OpenFormatNFT+mintWithCommission) ⇒ <code>ContractReceipt</code>
    * [.setMintingPrice(price)](#OpenFormatNFT+setMintingPrice) ⇒ <code>ContractReceipt</code>
    * [.setApprovedMintingExtension(extensionContractAddress)](#OpenFormatNFT+setApprovedMintingExtension) ⇒
    * [.setRoyalties(params)](#OpenFormatNFT+setRoyalties) ⇒ <code>ContractReceipt</code>
    * [.getRoyalties(params)](#OpenFormatNFT+getRoyalties) ⇒ <code>ContractReceipt</code>
    * [.setupRevenueSharing(params)](#OpenFormatNFT+setupRevenueSharing) ⇒ <code>ContractReceipt</code>
    * [.allocateRevenueShares(params)](#OpenFormatNFT+allocateRevenueShares) ⇒ <code>ContractReceipt</code>
    * [.getCollaboratorBalance(address)](#OpenFormatNFT+getCollaboratorBalance) ⇒ <code>BigNumberish</code>
    * [.withdrawCollaboratorFunds(address)](#OpenFormatNFT+withdrawCollaboratorFunds) ⇒ <code>ContractReceipt</code>
    * [.getTokenBalance(tokenId)](#OpenFormatNFT+getTokenBalance) ⇒ <code>BigNumberish</code>
    * [.withdrawTokenFunds(tokenId)](#OpenFormatNFT+withdrawTokenFunds) ⇒ <code>ContractReceipt</code>
    * [.setPrimaryCommissionPercent(percent)](#OpenFormatNFT+setPrimaryCommissionPercent) ⇒ <code>ContractReceipt</code>
    * [.getPrimaryCommissionPercent()](#OpenFormatNFT+getPrimaryCommissionPercent) ⇒ <code>BigNumberish</code>
    * [.setSecondaryCommissionPercent(percent)](#OpenFormatNFT+setSecondaryCommissionPercent) ⇒ <code>ContractReceipt</code>
    * [.getSecondaryCommissionPercent()](#OpenFormatNFT+getSecondaryCommissionPercent) ⇒ <code>BigNumberish</code>
    * [.setTokenSalePrice(params)](#OpenFormatNFT+setTokenSalePrice) ⇒ <code>ContractReceipt</code>
    * [.getTokenSalePrice(tokenId)](#OpenFormatNFT+getTokenSalePrice) ⇒ <code>BigNumberish</code>
    * [.getTokenCreator(tokenId)](#OpenFormatNFT+getTokenCreator) ⇒ <code>string</code>
    * [.getMaxSupply()](#OpenFormatNFT+getMaxSupply) ⇒ <code>BigNumberish</code>
    * [.setMaxSupply(amount)](#OpenFormatNFT+setMaxSupply) ⇒ <code>ContractReceipt</code>
    * [.getTotalSupply()](#OpenFormatNFT+getTotalSupply) ⇒ <code>BigNumberish</code>
    * [.buy(params)](#OpenFormatNFT+buy) ⇒ <code>ContractReceipt</code>
    * [.buyWithCommission(params)](#OpenFormatNFT+buyWithCommission) ⇒ <code>ContractReceipt</code>
    * [.togglePauseState()](#OpenFormatNFT+togglePauseState) ⇒ <code>ContractReceipt</code>
    * [.burn(tokenId)](#OpenFormatNFT+burn) ⇒ <code>ContractReceipt</code>

<a name="OpenFormatNFT+mint"></a>

### openFormatNFT.mint() ⇒ <code>ContractReceipt</code>
<p>Mints an NFT from a deployed Open Format contract</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
<a name="OpenFormatNFT+mintWithCommission"></a>

### openFormatNFT.mintWithCommission(address) ⇒ <code>ContractReceipt</code>
<p>Mints an NFT with commission on a contract address</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | <p>Address of the contract</p> |

<a name="OpenFormatNFT+setMintingPrice"></a>

### openFormatNFT.setMintingPrice(price) ⇒ <code>ContractReceipt</code>
<p>Mints an NFT with commission on a contract address</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| price | <code>BigNumberish</code> | <p>The desired price of minting</p> |

<a name="OpenFormatNFT+setApprovedMintingExtension"></a>

### openFormatNFT.setApprovedMintingExtension(extensionContractAddress) ⇒
<p>Sets the approved minting share extension</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <p>transaction</p>  

| Param | Type | Description |
| --- | --- | --- |
| extensionContractAddress | <code>string</code> | <p>The contract address of the approved minting extension</p> |

<a name="OpenFormatNFT+setRoyalties"></a>

### openFormatNFT.setRoyalties(params) ⇒ <code>ContractReceipt</code>
<p>Setup royalties to be paid to an address</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.royaltyReceiverAddress | <code>string</code> | <p>Address of the receiver of the royalties</p> |
| params.royaltyPercentage | <code>number</code> | <p>The percentage between 0-1000 they will receive</p> |

<a name="OpenFormatNFT+getRoyalties"></a>

### openFormatNFT.getRoyalties(params) ⇒ <code>ContractReceipt</code>
<p>Gets royalties based on sale price</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.salePrice | <code>number</code> | <p>Sale price to be retrieved</p> |

<a name="OpenFormatNFT+setupRevenueSharing"></a>

### openFormatNFT.setupRevenueSharing(params) ⇒ <code>ContractReceipt</code>
<p>Sets up Revenue Sharing</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.contractAddress | <code>string</code> | <p>Address of the contract</p> |
| params.collaborator | <code>Array.&lt;Object&gt;</code> | <p>Array of collaborators</p> |
| params.collaborator[].address | <code>string</code> | <p>Address of the collaborator</p> |
| params.collaborator[].share | <code>BigNumberish</code> | <p>Share for the collaborator</p> |
| params.holderPercentage | <code>number</code> | <p>The holders percentage</p> |

<a name="OpenFormatNFT+allocateRevenueShares"></a>

### openFormatNFT.allocateRevenueShares(params) ⇒ <code>ContractReceipt</code>
<p>Allocation of shares</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Array.&lt;Object&gt;</code> | <p>Array of accounts</p> |
| params[].address | <code>string</code> | <p>Address of the account</p> |
| params[].share | <code>BigNumberish</code> | <p>Allocated share for the account</p> |

<a name="OpenFormatNFT+getCollaboratorBalance"></a>

### openFormatNFT.getCollaboratorBalance(address) ⇒ <code>BigNumberish</code>
<p>Get the balance of a collaborator</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | <p>Address of the collaborator</p> |

<a name="OpenFormatNFT+withdrawCollaboratorFunds"></a>

### openFormatNFT.withdrawCollaboratorFunds(address) ⇒ <code>ContractReceipt</code>
<p>Withdrawl of collaborator funds</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| address | <code>string</code> | <p>Address of the collaborator</p> |

<a name="OpenFormatNFT+getTokenBalance"></a>

### openFormatNFT.getTokenBalance(tokenId) ⇒ <code>BigNumberish</code>
<p>Get the balance of a token</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="OpenFormatNFT+withdrawTokenFunds"></a>

### openFormatNFT.withdrawTokenFunds(tokenId) ⇒ <code>ContractReceipt</code>
<p>Withdrawl of token funds</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="OpenFormatNFT+setPrimaryCommissionPercent"></a>

### openFormatNFT.setPrimaryCommissionPercent(percent) ⇒ <code>ContractReceipt</code>
<p>Sets the percentage of the primary commission</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| percent | <code>BigNumberish</code> | <p>Percentage of primary commission</p> |

<a name="OpenFormatNFT+getPrimaryCommissionPercent"></a>

### openFormatNFT.getPrimaryCommissionPercent() ⇒ <code>BigNumberish</code>
<p>Gets the percentage of the primary commission</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <code>BigNumberish</code> - <p>The percentage of primary commission</p>  
<a name="OpenFormatNFT+setSecondaryCommissionPercent"></a>

### openFormatNFT.setSecondaryCommissionPercent(percent) ⇒ <code>ContractReceipt</code>
<p>Sets the percentage of the secondary commission</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| percent | <code>BigNumberish</code> | <p>Percentage of secondary commission</p> |

<a name="OpenFormatNFT+getSecondaryCommissionPercent"></a>

### openFormatNFT.getSecondaryCommissionPercent() ⇒ <code>BigNumberish</code>
<p>Gets the percentage of the secondary commission</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <code>BigNumberish</code> - <p>The percentage of secondary commission</p>  
<a name="OpenFormatNFT+setTokenSalePrice"></a>

### openFormatNFT.setTokenSalePrice(params) ⇒ <code>ContractReceipt</code>
<p>Sets the token sale price</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.tokenId | <code>BigNumberish</code> | <p>Token ID</p> |
| params.price | <code>BigNumberish</code> | <p>Desired price of the token</p> |

<a name="OpenFormatNFT+getTokenSalePrice"></a>

### openFormatNFT.getTokenSalePrice(tokenId) ⇒ <code>BigNumberish</code>
<p>Gets the token sale price</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <code>BigNumberish</code> - <p>Token sale price</p>  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="OpenFormatNFT+getTokenCreator"></a>

### openFormatNFT.getTokenCreator(tokenId) ⇒ <code>string</code>
<p>Gets the creator of a token</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <code>string</code> - <p>Creator of the token</p>  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="OpenFormatNFT+getMaxSupply"></a>

### openFormatNFT.getMaxSupply() ⇒ <code>BigNumberish</code>
<p>Gets the max supply</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <code>BigNumberish</code> - <p>Max supply</p>  
<a name="OpenFormatNFT+setMaxSupply"></a>

### openFormatNFT.setMaxSupply(amount) ⇒ <code>ContractReceipt</code>
<p>Sets the max supply</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>BigNumberish</code> | <p>The maximum amount of the supply</p> |

<a name="OpenFormatNFT+getTotalSupply"></a>

### openFormatNFT.getTotalSupply() ⇒ <code>BigNumberish</code>
<p>Gets the total supply</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
**Returns**: <code>BigNumberish</code> - <p>Total supply</p>  
<a name="OpenFormatNFT+buy"></a>

### openFormatNFT.buy(params) ⇒ <code>ContractReceipt</code>
<p>Buy</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.tokenId | <code>BigNumberish</code> | <p>Token ID</p> |

<a name="OpenFormatNFT+buyWithCommission"></a>

### openFormatNFT.buyWithCommission(params) ⇒ <code>ContractReceipt</code>
<p>Buy with commission</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> |  |
| params.tokenId | <code>BigNumberish</code> | <p>Token ID</p> |
| params.address | <code>number</code> | <p>Address</p> |

<a name="OpenFormatNFT+togglePauseState"></a>

### openFormatNFT.togglePauseState() ⇒ <code>ContractReceipt</code>
<p>Toggle the paused state</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  
<a name="OpenFormatNFT+burn"></a>

### openFormatNFT.burn(tokenId) ⇒ <code>ContractReceipt</code>
<p>Burn a token</p>

**Kind**: instance method of [<code>OpenFormatNFT</code>](#OpenFormatNFT)  

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>BigNumberish</code> | <p>Token ID</p> |