import React from 'react';
import { useRefatchSolanaBalance } from './hook/useRefatchSolanaBalance';
import { PublicKey } from '@solana/web3.js';

export const BalanceDisplay = () => {
  const balance = useRefatchSolanaBalance();

  return (
    <div>
      <p className='font-xl font-bold my-5'>
        {PublicKey ? `Balance: ${balance} SOL` : 'Connect your wallet to view balance'}
      </p>
    </div>
  );
};
