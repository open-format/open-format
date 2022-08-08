# NFT

### OpenFormatNFT

Creates a new instances of the OpenFormatNFT class which allows you to interact with a single deployed NFT

**Kind**: global class\
**Access**: public

* [OpenFormatNFT](nft.md#OpenFormatNFT)
  * [.mint()](nft.md#OpenFormatNFT+mint) ⇒ `ContractReceipt`
  * [.mintWithCommission(address)](nft.md#OpenFormatNFT+mintWithCommission) ⇒ `ContractReceipt`
  * [.setMintingPrice(price)](nft.md#OpenFormatNFT+setMintingPrice) ⇒ `ContractReceipt`
  * [.setRoyalties(params)](nft.md#OpenFormatNFT+setRoyalties) ⇒ `ContractReceipt`
  * [.getRoyalties(params)](nft.md#OpenFormatNFT+getRoyalties) ⇒ `ContractReceipt`
  * [.setupRevenueSharing(params)](nft.md#OpenFormatNFT+setupRevenueSharing) ⇒ `ContractReceipt`
  * [.allocateRevenueShares(params)](nft.md#OpenFormatNFT+allocateRevenueShares) ⇒ `ContractReceipt`
  * [.getCollaboratorBalance(address)](nft.md#OpenFormatNFT+getCollaboratorBalance) ⇒ `BigNumberish`
  * [.withdrawCollaboratorFunds(address)](nft.md#OpenFormatNFT+withdrawCollaboratorFunds) ⇒ `ContractReceipt`
  * [.getTokenBalance(tokenId)](nft.md#OpenFormatNFT+getTokenBalance) ⇒ `BigNumberish`
  * [.withdrawTokenFunds(tokenId)](nft.md#OpenFormatNFT+withdrawTokenFunds) ⇒ `ContractReceipt`
  * [.setPrimaryCommissionPercent(percent)](nft.md#OpenFormatNFT+setPrimaryCommissionPercent) ⇒ `ContractReceipt`
  * [.getPrimaryCommissionPercent()](nft.md#OpenFormatNFT+getPrimaryCommissionPercent) ⇒ `BigNumberish`
  * [.setSecondaryCommissionPercent(percent)](nft.md#OpenFormatNFT+setSecondaryCommissionPercent) ⇒ `ContractReceipt`
  * [.getSecondaryCommissionPercent()](nft.md#OpenFormatNFT+getSecondaryCommissionPercent) ⇒ `BigNumberish`
  * [.setTokenSalePrice(params)](nft.md#OpenFormatNFT+setTokenSalePrice) ⇒ `ContractReceipt`
  * [.getTokenSalePrice(tokenId)](nft.md#OpenFormatNFT+getTokenSalePrice) ⇒ `BigNumberish`
  * [.getTokenCreator(tokenId)](nft.md#OpenFormatNFT+getTokenCreator) ⇒ `string`
  * [.getMaxSupply()](nft.md#OpenFormatNFT+getMaxSupply) ⇒ `BigNumberish`
  * [.setMaxSupply(amount)](nft.md#OpenFormatNFT+setMaxSupply) ⇒ `ContractReceipt`
  * [.getTotalSupply()](nft.md#OpenFormatNFT+getTotalSupply) ⇒ `BigNumberish`
  * [.buy(params)](nft.md#OpenFormatNFT+buy) ⇒ `ContractReceipt`
  * [.buyWithCommission(params)](nft.md#OpenFormatNFT+buyWithCommission) ⇒ `ContractReceipt`
  * [.togglePauseState()](nft.md#OpenFormatNFT+togglePauseState) ⇒ `ContractReceipt`
  * [.burn(tokenId)](nft.md#OpenFormatNFT+burn) ⇒ `ContractReceipt`

#### openFormatNFT.mint() ⇒ `ContractReceipt`

Mints an NFT from a deployed Open Format contract

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

#### openFormatNFT.mintWithCommission(address) ⇒ `ContractReceipt`

Mints an NFT with commission on a contract address

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type     | Description             |
| ------- | -------- | ----------------------- |
| address | `string` | Address of the contract |

#### openFormatNFT.setMintingPrice(price) ⇒ `ContractReceipt`

Mints an NFT with commission on a contract address

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param | Type           | Description                  |
| ----- | -------------- | ---------------------------- |
| price | `BigNumberish` | The desired price of minting |

#### openFormatNFT.setRoyalties(params) ⇒ `ContractReceipt`

Setup royalties to be paid to an address

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param                         | Type     | Description                                     |
| ----------------------------- | -------- | ----------------------------------------------- |
| params                        | `Object` |                                                 |
| params.royaltyReceiverAddress | `string` | Address of the receiver of the royalties        |
| params.royaltyPercentage      | `number` | The percentage between 0-1000 they will receive |

#### openFormatNFT.getRoyalties(params) ⇒ `ContractReceipt`

Gets royalties based on sale price

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param            | Type     | Description                |
| ---------------- | -------- | -------------------------- |
| params           | `Object` |                            |
| params.salePrice | `number` | Sale price to be retrieved |

#### openFormatNFT.setupRevenueSharing(params) ⇒ `ContractReceipt`

Sets up Revenue Sharing

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param                          | Type             | Description                 |
| ------------------------------ | ---------------- | --------------------------- |
| params                         | `Object`         |                             |
| params.contractAddress         | `string`         | Address of the contract     |
| params.collaborator            | `Array.<Object>` | Array of collaborators      |
| params.collaborator\[].address | `string`         | Address of the collaborator |
| params.collaborator\[].share   | `BigNumberish`   | Share for the collaborator  |
| params.holderPercentage        | `number`         | The holders percentage      |

#### openFormatNFT.allocateRevenueShares(params) ⇒ `ContractReceipt`

Allocation of shares

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param             | Type             | Description                     |
| ----------------- | ---------------- | ------------------------------- |
| params            | `Array.<Object>` | Array of accounts               |
| params\[].address | `string`         | Address of the account          |
| params\[].share   | `BigNumberish`   | Allocated share for the account |

#### openFormatNFT.getCollaboratorBalance(address) ⇒ `BigNumberish`

Get the balance of a collaborator

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type     | Description                 |
| ------- | -------- | --------------------------- |
| address | `string` | Address of the collaborator |

#### openFormatNFT.withdrawCollaboratorFunds(address) ⇒ `ContractReceipt`

Withdrawl of collaborator funds

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type     | Description                 |
| ------- | -------- | --------------------------- |
| address | `string` | Address of the collaborator |

#### openFormatNFT.getTokenBalance(tokenId) ⇒ `BigNumberish`

Get the balance of a token

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type           | Description |
| ------- | -------------- | ----------- |
| tokenId | `BigNumberish` | Token ID    |

#### openFormatNFT.withdrawTokenFunds(tokenId) ⇒ `ContractReceipt`

Withdrawl of token funds

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type           | Description |
| ------- | -------------- | ----------- |
| tokenId | `BigNumberish` | Token ID    |

#### openFormatNFT.setPrimaryCommissionPercent(percent) ⇒ `ContractReceipt`

Sets the percentage of the primary commission

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type           | Description                      |
| ------- | -------------- | -------------------------------- |
| percent | `BigNumberish` | Percentage of primary commission |

#### openFormatNFT.getPrimaryCommissionPercent() ⇒ `BigNumberish`

Gets the percentage of the primary commission

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)\
**Returns**: `BigNumberish` -

The percentage of primary commission

#### openFormatNFT.setSecondaryCommissionPercent(percent) ⇒ `ContractReceipt`

Sets the percentage of the secondary commission

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type           | Description                        |
| ------- | -------------- | ---------------------------------- |
| percent | `BigNumberish` | Percentage of secondary commission |

#### openFormatNFT.getSecondaryCommissionPercent() ⇒ `BigNumberish`

Gets the percentage of the secondary commission

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)\
**Returns**: `BigNumberish` -

The percentage of secondary commission

#### openFormatNFT.setTokenSalePrice(params) ⇒ `ContractReceipt`

Sets the token sale price

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param          | Type           | Description                |
| -------------- | -------------- | -------------------------- |
| params         | `Object`       |                            |
| params.tokenId | `BigNumberish` | Token ID                   |
| params.price   | `BigNumberish` | Desired price of the token |

#### openFormatNFT.getTokenSalePrice(tokenId) ⇒ `BigNumberish`

Gets the token sale price

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)\
**Returns**: `BigNumberish` -

Token sale price

| Param   | Type           | Description |
| ------- | -------------- | ----------- |
| tokenId | `BigNumberish` | Token ID    |

#### openFormatNFT.getTokenCreator(tokenId) ⇒ `string`

Gets the creator of a token

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)\
**Returns**: `string` -

Creator of the token

| Param   | Type           | Description |
| ------- | -------------- | ----------- |
| tokenId | `BigNumberish` | Token ID    |

#### openFormatNFT.getMaxSupply() ⇒ `BigNumberish`

Gets the max supply

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)\
**Returns**: `BigNumberish` -

Max supply

#### openFormatNFT.setMaxSupply(amount) ⇒ `ContractReceipt`

Sets the max supply

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param  | Type           | Description                      |
| ------ | -------------- | -------------------------------- |
| amount | `BigNumberish` | The maximum amount of the supply |

#### openFormatNFT.getTotalSupply() ⇒ `BigNumberish`

Gets the total supply

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)\
**Returns**: `BigNumberish` -

Total supply

#### openFormatNFT.buy(params) ⇒ `ContractReceipt`

Buy

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param          | Type           | Description |
| -------------- | -------------- | ----------- |
| params         | `Object`       |             |
| params.tokenId | `BigNumberish` | Token ID    |

#### openFormatNFT.buyWithCommission(params) ⇒ `ContractReceipt`

Buy with commission

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param          | Type           | Description |
| -------------- | -------------- | ----------- |
| params         | `Object`       |             |
| params.tokenId | `BigNumberish` | Token ID    |
| params.address | `number`       | Address     |

#### openFormatNFT.togglePauseState() ⇒ `ContractReceipt`

Toggle the paused state

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

#### openFormatNFT.burn(tokenId) ⇒ `ContractReceipt`

Burn a token

**Kind**: instance method of [`OpenFormatNFT`](nft.md#OpenFormatNFT)

| Param   | Type           | Description |
| ------- | -------------- | ----------- |
| tokenId | `BigNumberish` | Token ID    |
