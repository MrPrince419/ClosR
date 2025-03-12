"use client";

import Script from "next/script";

const EthereumCheckScript = () => {
  const handleError = (e: Error) => {
    console.error('Error loading ethereum check script:', e);
  };

  const handleLoad = () => {
    console.log('Ethereum check script loaded successfully');
  };

  return (
    <Script 
      id="ethereum-check" 
      src="/scripts/ethereum-check.js"
      strategy="afterInteractive"
      onError={handleError}
      onLoad={handleLoad}
    />
  );
};

export default EthereumCheckScript;