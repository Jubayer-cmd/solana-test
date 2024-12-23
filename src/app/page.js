"use client";
import Header from "@/Components/Header/Header";
import { useWallet } from '@solana/wallet-adapter-react';
import { BalanceDisplay } from '@/Components/AccountInformation/BalanceDisplay';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import SendTransaction from "@/Components/SendTransaction/sendTransaction";


const Home = () => {
  const { connected } = useWallet();
  return (
      <div className='flex justify-center items-center h-screen'>
    <div className='flex flex-col items-center'>
      <Header />
      <WalletMultiButton />
      {connected && (
        <>
          <BalanceDisplay />
          <SendTransaction />
        </>
      )}
    </div>
  </div>
  );
};

export default Home;
