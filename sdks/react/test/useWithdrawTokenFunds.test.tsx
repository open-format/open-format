import '@testing-library/jest-dom';
import { ethers } from 'ethers';
import {
  useDeploy,
  useMint,
  useSetupRevenueSharing,
  useRevenueSharingAllocation,
  useWithdrawTokenFunds,
} from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Withdraw() {
  const { mint } = useMint();
  const { withdraw, data: withdrawData } = useWithdrawTokenFunds();

  const account = new ethers.Wallet(
    '0xc27786e23ac741aceef158731965a6285f350e114952201baad6149c18d735e7',
    new ethers.providers.JsonRpcProvider('http://localhost:8546')
  );

  const onWithdraw = async () => {
    await mint();

    await account.sendTransaction({
      to: sdk.options.contractAddress,
      value: '500',
    });

    withdraw(0);
  };

  return (
    <>
      <button data-testid="withdraw" onClick={onWithdraw}>
        Withdraw Token Funds
      </button>
      {withdrawData && <span data-testid="withdrawal"></span>}
    </>
  );
}

function Allocation() {
  const { allocate, data: allocationData } = useRevenueSharingAllocation();

  return (
    <>
      <button
        data-testid="allocate"
        onClick={() =>
          allocate([
            {
              address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
              share: 500,
            },
            {
              address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
              share: 500,
            },
          ])
        }
      >
        Allocate Shares
      </button>
      {allocationData && (
        <>
          <span data-testid="allocation"></span>
          <Withdraw />
        </>
      )}
    </>
  );
}

function Test() {
  const { deploy, data: deployData } = useDeploy();
  const { setup, data: revenueShareData } = useSetupRevenueSharing();

  return (
    <>
      <button
        data-testid="deploy"
        onClick={() => {
          deploy({
            maxSupply: 100,
            mintingPrice: 0.01,
            name: 'Test',
            symbol: 'TEST',
            url: 'ipfs://',
          });
        }}
      >
        Deploy
      </button>

      {deployData && <div data-testid="deployData"></div>}

      <button
        data-testid="setupRevenueSharing"
        onClick={() => {
          setup({
            revShareExtensionAddress:
              '0x483C3aDD26C87d2F99DcCB84Cbf61844B6aeD212',
            collaborators: [
              {
                address: '0xee4abd006630aea6fa3e685c99506db31c09b3f4',
                share: 1000,
              },
              {
                address: '0x21b2be9090d1d319e57b67c4b5d37bc5ec29a9d0',
                share: 1000,
              },
            ],
            holderPercentage: 5000,
          });
        }}
      >
        Setup Revenue Sharing
      </button>

      {revenueShareData && (
        <>
          <div data-testid="revenueShareData"></div>
          <Allocation />
        </>
      )}
    </>
  );
}

describe('useRevenueSharingAllocation', () => {
  it('allows you to allocate shares', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('setupRevenueSharing').click();
    await waitFor(() => screen.getByTestId('revenueShareData'));

    screen.getByTestId('allocate').click();
    await waitFor(() => screen.getByTestId('allocation'));

    screen.getByTestId('withdraw').click();
    await waitFor(() => screen.getByTestId('withdrawal'));
  });
});
