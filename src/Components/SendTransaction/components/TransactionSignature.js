import React from 'react';

export const TransactionSignature = ({ transactionLink }) => {
  if (!transactionLink) return null;

  return (
    <div className="mt-4">
      <a
        href={transactionLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        🔗 Check the transaction on Solana Explorer
      </a>
    </div>
  );
};
