import '@testing-library/jest-dom';
import React from 'react';
import { useMintWithCommission, useNFT } from '../src/hooks';
import { DeployedTest, render, screen, waitFor } from '../src/utilities';

function MintCommission({ address }: { address: string }) {
  const nft = useNFT(address);
  const { mintWithCommission, data } = useMintWithCommission(nft);

  return (
    <>
      <button
        data-testid="mint"
        onClick={() =>
          mintWithCommission('0xee4abd006630aea6fa3e685c99506db31c09b3f4')
        }
      >
        Mint With Commission
      </button>
      {data && <span data-testid="mintData"></span>}
    </>
  );
}

describe('useMintWithCommission', () => {
  it('allows you to mint with commission', async () => {
    render(
      <DeployedTest>
        {({ address }) => <MintCommission address={address} />}
      </DeployedTest>
    );

    const mint = await waitFor(() => screen.getByTestId('mint'));
    mint.click();
    await waitFor(() => screen.getByTestId('mintData'));
  });
});
