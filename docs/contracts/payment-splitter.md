# Payment Splitter

## Total Released

Getter for the total amount of Ether already released.

```solidity
function totalReleased() public view returns (uint256)
```

## Total Token Released

Getter for the total amount of `token` already released. `token` should be the address of an IERC20 contract.

```solidity
function totalReleased(contract IERC20 token) public view returns (uint256)
```

## Shares

Getter for the amount of shares held by an account.

```solidity
function shares(address account) public view returns (uint256)
```

## Released

Getter for the amount of `token` tokens already released to a payee. `token` should be the address of an IERC20 contract.

```solidity
function released(contract IERC20 token, address account) public view returns (uint256)
```

## Total Deposited Amount

Getter for the amount of Ether deposited via the deposit() function.

```solidity
function totalDepositedAmount() public view returns (uint256)
```

## Total Deposited Released

Getter for the amount of Ether already release via the `withdraw()` function.

```solidity
function totalDepositedReleased() public view returns (uint256)
```

## Payee

Getter for the address of the payee number `index`.

```solidity
function payee(uint256 index) public view returns (address)
```

## Release

Triggers a transfer to `account` of the amount of Ether they are owed, according to their percentage of the total shares and their previous withdrawals.

```solidity
function release(address payable account) public virtual
```

## Release Tokens

Triggers a transfer to `account` of the amount of `token` tokens they are owed, according to their percentage of the total shares and their previous withdrawals. `token` must be the address of an IERC20 contract.

```solidity
function release(contract IERC20 token, address account) public virtual
```

## Allocate Shares

Allocate a portion of your shares to a new or existing payee.

```solidity
function allocateShares(address[] accounts, uint256[] shares_) external
```


| **Name** | **Type**  | **Description**                         |
|----------|-----------|-----------------------------------------|
| accounts | address[] | The address of the payee to add.        |
| shares_  | uint256[] | The number of shares owned by the payee.|
