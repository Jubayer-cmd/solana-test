import { useState, useRef } from 'react';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

export const useSendSol = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [transactionLink, setTransactionLink] = useState('');
  const recipientRef = useRef(null);
  const amountRef = useRef(null);

  const sendSol = async (event) => {
    event.preventDefault();

    try {
      const recipientPubKey = new PublicKey(recipientRef.current.value);
      const amount = parseFloat(amountRef.current.value) * LAMPORTS_PER_SOL;

      const transaction = new Transaction();
      const sendSolInstruction = SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: recipientPubKey,
        lamports: amount,
      });

      transaction.add(sendSolInstruction);

      const signature = await sendTransaction(transaction, connection);
      console.log(`Transaction signature: ${signature}`);
      setTransactionLink(
        `https://explorer.solana.com/tx/${signature}?cluster=devnet`,
      );

      recipientRef.current.value = '';
      amountRef.current.value = '';

      return signature;
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  return {
    sendSol,
    transactionLink,
    recipientRef,
    amountRef,
  };
};
