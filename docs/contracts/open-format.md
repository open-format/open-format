---
description: >-
  This is the main contract for the Open Format protocol. NOTE: If this contract
  is modified and the ABI and bytecode changes it will not be compatible with
  the Open Format subgraphs.
---

# Open Format

## Initalisation

### constructor

```solidity
constructor(string name_, string symbol_, string metadataURI_, uint256 maxSupply_, uint256 mintingPrice_) public
```

Creates an instance of \`Open Format\`.

| Name           | Type    | Description                                                                         |
| -------------- | ------- | ----------------------------------------------------------------------------------- |
| name\_         | string  | The name of the NFT.                                                                |
| symbol\_       | string  | The block indentifier for the NFT e.g TUNE.                                         |
| metadataURI\_  | string  | The URI linking to the metadata of NFT. We highly recommend using IPFS. e.g ipfs:// |
| maxSupply\_    | uint256 | The total amount of NFTs that can be minted.                                        |
| mintingPrice\_ | uint256 | The mint price (in wei) of each NFT.                                                |

## update NFT information

### setMintingPrice

```solidity
function setMintingPrice(uint256 amount) external virtual
```

Setter for the minting price.

_Set to 0 for minting to be be free. This function can only be called by the owner of the contract._

| Name   | Type    | Description                                   |
| ------ | ------- | --------------------------------------------- |
| amount | uint256 | The amount (in wei) of the new minting price. |

### setRoyalties

```solidity
function setRoyalties(address royaltyReceiver, uint256 royaltiesPct) external virtual
```

Setter for the royalties using ERC2981.

_royaltiesPct e.g 2.5% = 250._

_This function can only be called by the owner of the contract._

| Name            | Type    | Description                          |
| --------------- | ------- | ------------------------------------ |
| royaltyReceiver | address | The address of the royalty receiver. |
| royaltiesPct    | uint256 | The percentage of the royalties.     |

### setMaxSupply

```solidity
function setMaxSupply(uint256 amount) external virtual
```

Setter for the maximum supply of tokens that can be minted.

_This function can only be called by the owner of the contract._

| Name   | Type    | Description                                    |
| ------ | ------- | ---------------------------------------------- |
| amount | uint256 | The total amount of tokens that can be minted. |

### setTokenSalePrice

```solidity
function setTokenSalePrice(uint256 tokenId, uint256 salePrice) external virtual
```

Setter for the secondary sale price for a given token.

_The salePrice must be greater than 0. This function can only be called by the token owner or approved address._

| Name      | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| tokenId   | uint256 | The token ID.                             |
| salePrice | uint256 | The new sale price (in wei) of the token. |

### togglePausedState

```solidity
function togglePausedState() external virtual
```

Toggles the paused state.

_When paused is true certain functions will be reverted. Use for timed drops, emergencies or damange prevention. This function can only be called by the owner of the contract._

### setApprovedDepositExtension

```solidity
function setApprovedDepositExtension(address contractAddress, uint256 holderPct) public
```

Setter for the approved deposit extension.

_holderPct e.g 2.5% = 250 This function can only be called by the owner of the contract._

| Name            | Type    | Description                                               |
| --------------- | ------- | --------------------------------------------------------- |
| contractAddress | address | The contract address of the deposit extension.            |
| holderPct       | uint256 | The percentage of a deposit that each token will receive. |

### setApprovedMintingExtension

```solidity
function setApprovedMintingExtension(address contractAddress) external
```

Setter for the approved minting extension.

_This function can only be called by the owner of the contract._

| Name            | Type    | Description                                    |
| --------------- | ------- | ---------------------------------------------- |
| contractAddress | address | The contract address of the minting extension. |

### setPrimaryCommissionPct

```solidity
function setPrimaryCommissionPct(uint256 amount) public
```

Setter for the primary commission for the contract.

_amount e.g 2.5% = 250 This function can only be called by the owner of the contract._

| Name   | Type    | Description                                                                        |
| ------ | ------- | ---------------------------------------------------------------------------------- |
| amount | uint256 | The percentage paid to the commission address when mint with commission is called. |

### setSecondaryCommissionPct

```solidity
function setSecondaryCommissionPct(uint256 amount) public
```

Setter for the secondary commission for the contract.

_amount e.g 2.5% = 250 This function can only be called by the owner of the contract._

| Name   | Type    | Description                                                                       |
| ------ | ------- | --------------------------------------------------------------------------------- |
| amount | uint256 | The percentage paid to the commission address when buy with commission is called. |

### setShareIncomeWithHolders

```solidity
function setShareIncomeWithHolders(bool state) public
```

Setter for sharing income (via the receive) with NFT holders

_This function can only be called by the owner of the contract._

| Name  | Type | Description   |
| ----- | ---- | ------------- |
| state | bool | true or false |

## Minting and Selling

### mint

```solidity
function mint() external payable virtual returns (uint256 newTokenId)
```

Mints a NFT.

_This is an overloaded function. An approved minting extension can be used before minting is approved._

| Name       | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| newTokenId | uint256 | The ID of the minted token. |

### mint

```solidity
function mint(address commissionAddress) external payable virtual returns (uint256 newTokenId)
```

Mints a NFT with a primary commission.

_This is an overloaded function. If a primary commission percentage is set, a percentage of the minting cost will go to the commission address._

| Name              | Type    | Description                                                 |
| ----------------- | ------- | ----------------------------------------------------------- |
| commissionAddress | address | The address that receives a percentage of the minting cost. |

| Name       | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| newTokenId | uint256 | The ID of the minted token. |

### buy

```solidity
function buy(uint256 tokenId) external payable virtual returns (bool)
```

Facilitates a secondary sale of an NFT.

_This is an overloaded function._

| Name    | Type    | Description                              |
| ------- | ------- | ---------------------------------------- |
| tokenId | uint256 | The ID of the token which is being sold. |

| Name | Type | Description |
| ---- | ---- | ----------- |
| \[0] | bool | bool        |

### buy

## Revenue sharing

### deposit

```solidity
function deposit() public payable virtual
```

This function handles Ether deposits via the approved deposit extension.

_This is an overloaded function. An approved deposit extension must be set._

### deposit

```solidity
function deposit(contract IERC20 token, uint256 amount) external payable virtual
```

This function handles ERC20 token deposits via the approved deposit extension.

_This is an overloaded function. An approved deposit extension must be set._

| Name   | Type            | Description                                        |
| ------ | --------------- | -------------------------------------------------- |
| token  | contract IERC20 | The contract address of the ERC20 token.           |
| amount | uint256         | The amount (in wei) of the ERC20 token to deposit. |

### withdraw

```solidity
function withdraw(uint256 tokenId) public payable returns (uint256)
```

This function handles withdrawing the Ether balance of a single token via the approved deposit extension.

_This is an overloaded function. An approved deposit extension must be set. This will withdraw the entire balance for the given NFT._

| Name    | Type    | Description                           |
| ------- | ------- | ------------------------------------- |
| tokenId | uint256 | The ID of the token to withdraw from. |

### withdraw

## Get NFT information

### creatorOf

```solidity
function creatorOf(uint256 tokenId) external view virtual returns (address)
```

Getter for the creator of a given token.

| Name    | Type    | Description          |
| ------- | ------- | -------------------- |
| tokenId | uint256 | The ID of the token. |

| Name | Type    | Description                                    |
| ---- | ------- | ---------------------------------------------- |
| \[0] | address | tokenCreator The address of the token creator. |

### getTokenSalePrice

```solidity
function getTokenSalePrice(uint256 tokenId) external view virtual returns (uint256)
```

Getter the token sale price of a given token.

| Name    | Type    | Description          |
| ------- | ------- | -------------------- |
| tokenId | uint256 | The ID of the token. |

| Name | Type    | Description                                     |
| ---- | ------- | ----------------------------------------------- |
| \[0] | uint256 | salePrice The sale price (in wei) of the token. |

### getPrimaryCommissionPct

```solidity
function getPrimaryCommissionPct() external view returns (uint256)
```

Getter for the primary commission percent.

| Name | Type    | Description                                       |
| ---- | ------- | ------------------------------------------------- |
| \[0] | uint256 | percentage The set primary commission percentage. |

### getSecondaryCommissionPct

```solidity
function getSecondaryCommissionPct() external view returns (uint256)
```

Getter for the primary commission percent.

| Name | Type    | Description                                       |
| ---- | ------- | ------------------------------------------------- |
| \[0] | uint256 | percentage The set primary commission percentage. |

### getMaxSupply

```solidity
function getMaxSupply() external view returns (uint256)
```

Getter for the max supply of token that can be minted.

| Name | Type    | Description                         |
| ---- | ------- | ----------------------------------- |
| \[0] | uint256 | maxSupply The max supply of tokens. |

### getTotalSupply

```solidity
function getTotalSupply() external view returns (uint256)
```

Getter for the amount of token that have been minted.

| Name | Type    | Description                                             |
| ---- | ------- | ------------------------------------------------------- |
| \[0] | uint256 | totalSupply The amount of tokens that have been minted. |

### getOwner

```solidity
function getOwner() external view returns (address)
```

Getter for the owner of the contact.

| Name | Type    | Description                              |
| ---- | ------- | ---------------------------------------- |
| \[0] | address | owner The address of the contract owner. |

### getSingleTokenBalance

```solidity
function getSingleTokenBalance(uint256 tokenId) external view returns (uint256 tokenBalance)
```

Getter for the Ether balance of a single token.

_An approved deposit extension must be set._

| Name    | Type    | Description   |
| ------- | ------- | ------------- |
| tokenId | uint256 | The token ID. |

| Name         | Type    | Description                 |
| ------------ | ------- | --------------------------- |
| tokenBalance | uint256 | The token balance in Ether. |

### getSingleTokenBalance

```solidity
function buy(uint256 tokenId, address commissionAddress) external payable virtual returns (bool)
```

Facilitates a secondary sale of an NFT with a secondary commission.

_This is an overloaded function._

| Name              | Type    | Description                              |
| ----------------- | ------- | ---------------------------------------- |
| tokenId           | uint256 | The ID of the token which is being sold. |
| commissionAddress | address |                                          |

| Name | Type | Description |
| ---- | ---- | ----------- |
| \[0] | bool | bool        |

```solidity
function withdraw(contract IERC20 token, uint256 tokenId) public payable returns (uint256)
```

This function handles withdrawing ERC20 balances of a single token via the approved deposit extension.

_This is an overloaded function. An approved deposit extension must be set. This will withdraw the entire balance of a single ERC20 token for the given NFT._

| Name    | Type            | Description                              |
| ------- | --------------- | ---------------------------------------- |
| token   | contract IERC20 | The contract address of the ERC20 token. |
| tokenId | uint256         | The ID of the token to withdraw from.    |

```solidity
function getSingleTokenBalance(contract IERC20 token, uint256 tokenId) external view returns (uint256 tokenBalance)
```

Getter for the ERC20 token balance of a single token.

_An approved deposit extension must be set._

| Name    | Type            | Description                              |
| ------- | --------------- | ---------------------------------------- |
| token   | contract IERC20 | The contract address of the ERC20 token. |
| tokenId | uint256         | The token ID.                            |

| Name         | Type    | Description                                          |
| ------------ | ------- | ---------------------------------------------------- |
| tokenBalance | uint256 | The token balance of the given ERC20 token in Ether. |

### burn

```solidity
function burn(uint256 tokenId) external virtual
```

Burns a token.

_This function can only be called by the token owner or approved address._

| Name    | Type    | Description                      |
| ------- | ------- | -------------------------------- |
| tokenId | uint256 | The token ID that will be burnt. |

### receive

```solidity
receive() external payable
```

\_The Ether received will be logged with {PaymentReceived} events. Note that these events are not fully reliable: it's possible for a contract to receive Ether without triggering this function. This only affects the reliability of the events, and not the actual splitting of Ether.

To learn more about this see the Solidity documentation for https://solidity.readthedocs.io/en/latest/contracts.html#fallback-function\[fallback functions].\_
