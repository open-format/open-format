# NFT

### OpenFormatNFT

Creates a new instances of the OpenFormatNFT class which allows you to interact with a single deployed NFT

**Kind**: global class\
**Access**: public

* [OpenFormatNFT](nft.md#OpenFormatNFT)
  * [.mint()](nft.md#openformatnft.mint-contractreceipt) ⇒ `ContractReceipt`
  * [.mintWithCommission(address)](nft.md#openformatnft.mintwithcommission-address-contractreceipt) ⇒ `ContractReceipt`
  * [.setMintingPrice(price)](nft.md#openformatnft.setmintingprice-price-contractreceipt) ⇒ `ContractReceipt`
  * [.setRoyalties(params)](nft.md#openformatnft.setroyalties-params-contractreceipt) ⇒ `ContractReceipt`
  * [.getRoyalties(params)](nft.md#openformatnft.getroyalties-params-contractreceipt) ⇒ `ContractReceipt`
  * [.setupRevenueSharing(params)](nft.md#openformatnft.setuprevenuesharing-params-contractreceipt) ⇒ `ContractReceipt`
  * [.allocateRevenueShares(params)](nft.md#openformatnft.allocaterevenueshares-params-contractreceipt) ⇒ `ContractReceipt`
  * [.getCollaboratorBalance(address)](nft.md#openformatnft.getcollaboratorbalance-address-bignumberish) ⇒ `BigNumberish`
  * [.withdrawCollaboratorFunds(address)](nft.md#openformatnft.withdrawcollaboratorfunds-address-contractreceipt) ⇒ `ContractReceipt`
  * [.getTokenBalance(tokenId)](nft.md#openformatnft.gettokenbalance-tokenid-bignumberish) ⇒ `BigNumberish`
  * [.withdrawTokenFunds(tokenId)](nft.md#openformatnft.withdrawcollaboratorfunds-address-contractreceipt) ⇒ `ContractReceipt`
  * [.setPrimaryCommissionPercent(percent)](nft.md#openformatnft.setprimarycommissionpercent-percent-contractreceipt) ⇒ `ContractReceipt`
  * [.getPrimaryCommissionPercent()](nft.md#openformatnft.getprimarycommissionpercent-bignumberish) ⇒ `BigNumberish`
  * [.setSecondaryCommissionPercent(percent)](nft.md#openformatnft.setsecondarycommissionpercent-percent-contractreceipt) ⇒ `ContractReceipt`
  * [.getSecondaryCommissionPercent()](nft.md#openformatnft.getsecondarycommissionpercent-bignumberish) ⇒ `BigNumberish`
  * [.setTokenSalePrice(params)](nft.md#openformatnft.settokensaleprice-params-contractreceipt) ⇒ `ContractReceipt`
  * [.getTokenSalePrice(tokenId)](nft.md#openformatnft.gettokensaleprice-tokenid-bignumberish) ⇒ `BigNumberish`
  * [.getTokenCreator(tokenId)](nft.md#openformatnft.gettokencreator-tokenid-string) ⇒ `string`
  * [.getMaxSupply()](nft.md#openformatnft.getmaxsupply-bignumberish) ⇒ `BigNumberish`
  * [.setMaxSupply(amount)](nft.md#openformatnft.setmaxsupply-amount-contractreceipt) ⇒ `ContractReceipt`
  * [.getTotalSupply()](nft.md#openformatnft.gettotalsupply-bignumberish) ⇒ `BigNumberish`
  * [.buy(params)](nft.md#openformatnft.buy-params-contractreceipt) ⇒ `ContractReceipt`
  * .[buyWithCommission(params)](nft.md#openformatnft.buywithcommission-params-contractreceipt) ⇒ `ContractReceipt`
  * [.togglePauseState()](nft.md#openformatnft.togglepausestate-contractreceipt) ⇒ `ContractReceipt`
  * [.burn(tokenId)](nft.md#openformatnft.burn-tokenid-contractreceipt) ⇒ `ContractReceipt`

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
