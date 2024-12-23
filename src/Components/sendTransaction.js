'use client';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from '@solana/web3.js';
import { useState, useRef } from 'react';

const SendSolComponent = () => {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [transactionLink, setTransactionLink] = useState('');
  const recipientRef = useRef(null);
  const amountRef = useRef(null);

  const sendSol = async (event) => {
    event.preventDefault();
    console.log('check');
    if (!publicKey) {
      console.error('Wallet not connected');
      return;
    }

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

      // Clear input fields after successful transaction
      recipientRef.current.value = '';
      amountRef.current.value = '';
    } catch (error) {
      console.error('Transaction failed', error);
    }
  };

  return (
    <div>
      <form onSubmit={sendSol}>
        <div className='flex flex-col items-center'>
          <input
            className='p-2 text-black my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
            type='text'
            name='recipient'
            placeholder='Recipient Public Key'
            ref={recipientRef}
          />
          <input
            className='p-2 text-black my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
            type='number'
            name='amount'
            placeholder='Amount in SOL'
            step='0.001'
            ref={amountRef}
          />
          <button
            className='px-4 py-2 rounded-md bg-purple-400 hover:bg-purple-500 my-5'
            type='submit'
          >
            Send SOL
          </button>
        </div>
      </form>
      {transactionLink && (
        <div className='mt-4'>
          <a
            href={transactionLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 underline'
          >
            🔗 Check the transaction on Solana Explorer
          </a>
        </div>
      )}
    </div>
  );
};

export default SendSolComponent;
