'use client';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';
import './globals.css';

export default function RootLayout({ children }) {
  const endpoint = clusterApiUrl('devnet');
  const wallets = useMemo(() => [], []);
  return (
    <html lang='en'>
      <body>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets}>
            <WalletModalProvider>{children}</WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  );
}
