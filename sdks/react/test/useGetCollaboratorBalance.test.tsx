import '@testing-library/jest-dom';
import {
  useDeploy,
  useMint,
  useSetupRevenueSharing,
  useRevenueSharingAllocation,
  useGetCollaboratorBalance,
  useNFT,
} from '../src/hooks';
import { render, screen, waitFor } from '../src/utilities';
import React from 'react';

function Balance() {
  const { data: balanceData } = useGetCollaboratorBalance(
    '0xee4abd006630aea6fa3e685c99506db31c09b3f4'
  );

  return <>{balanceData && <span data-testid="balance"></span>}</>;
}

function Mint({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mint } = useMint(nft);
  const [complete, setCompletion] = React.useState(false);

  const onMint = async () => {
    await mint();
    setCompletion(true);
  };

  return (
    <>
      <button data-testid="mint" onClick={onMint}>
        Mint
      </button>
      {complete && (
        <>
          <span data-testid="minted"></span>
          <Balance />
        </>
      )}
    </>
  );
}

function Allocation({ address }: { address: string }) {
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
          <Mint address={address} />
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

      {revenueShareData && deployData && (
        <>
          <div data-testid="revenueShareData"></div>
          <Allocation address={deployData.contractAddress} />
        </>
      )}
    </>
  );
}

describe('useGetCollaboratorBalance', () => {
  it('allows you to get the balance of a collaborator', async () => {
    render(<Test />);

    screen.getByTestId('deploy').click();
    await waitFor(() => screen.getByTestId('deployData'));

    screen.getByTestId('setupRevenueSharing').click();
    await waitFor(() => screen.getByTestId('revenueShareData'));

    screen.getByTestId('allocate').click();
    await waitFor(() => screen.getByTestId('allocation'));

    screen.getByTestId('mint').click();
    await waitFor(() => screen.getByTestId('minted'));

    await waitFor(() => screen.getByTestId('balance'));
  });
});
