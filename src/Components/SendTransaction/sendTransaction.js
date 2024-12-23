'use client';

import React from 'react';
import { useSendSol } from './hooks/useSendSol';
import { TransactionSignature } from './components/TransactionSignature';

const SendSolComponent = () => {
  const { sendSol, transactionLink, recipientRef, amountRef } = useSendSol();

  return (
    <div>
      <form onSubmit={sendSol}>
        <div className="flex flex-col items-center">
          <input
            className="p-2 text-black my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            name="recipient"
            placeholder="Recipient Public Key"
            ref={recipientRef}
          />
          <input
            className="p-2 text-black my-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="number"
            name="amount"
            placeholder="Amount in SOL"
            step="0.001"
            ref={amountRef}
          />
          <button
            className="px-4 py-2 rounded-md bg-purple-400 hover:bg-purple-500 my-5"
            type="submit"
          >
            Send SOL
          </button>
        </div>
      </form>
      <TransactionSignature transactionLink={transactionLink} />
    </div>
  );
};

export default SendSolComponent;
