"use client";

import Script from "next/script";

const EthereumCheckScript = () => {
  const handleError = (e: Error) => {
    console.error('Error loading ethereum check script:', e);
  };

  return (
    <Script 
      id="ethereum-check" 
      src="/scripts/ethereum-check.js"
      strategy="beforeInteractive"
      onError={handleError}
    />
  );
};

export default EthereumCheckScript;