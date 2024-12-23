'use client';
import { useWallet } from '@solana/wallet-adapter-react';
import { BalanceDisplay } from '@/Components/BalanceDisplay';
import SendSolComponent from '@/Components/sendTransaction';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home = () => {
  const { connected } = useWallet();
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold my-5'>
          Solana Wallet Adapter Example
        </h1>
        <WalletMultiButton />
        {connected && (
          <>
            <BalanceDisplay />
            <SendSolComponent />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
