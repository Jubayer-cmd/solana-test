import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useRefatchSolanaBalance } from './hook/useRefatchSolanaBalance';

export const BalanceDisplay = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const balance = useRefatchSolanaBalance(connection, publicKey);

  return (
    <div>
      <p className='font-xl font-bold my-5'>
        {publicKey ? `Balance: ${balance} SOL` : 'Connect your wallet to view balance'}
      </p>
    </div>
  );
};
