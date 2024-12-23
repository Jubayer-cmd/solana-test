'use client';
import { useWallet } from '@solana/wallet-adapter-react';
import { BalanceDisplay } from '@/Components/AccountInformation/BalanceDisplay';
import SendSolComponent from '@/Components/SendTransaction/sendTransaction';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Header from './Header/Header';

const RootComponent = () => {
    const { connected } = useWallet();
    return (
        <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <Header />
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

export default RootComponent;