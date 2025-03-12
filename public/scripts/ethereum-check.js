// Prevent ethereum property redefinition errors
if (typeof window !== 'undefined') {
  (async function initializeEthereum() {
    try {
      // Check if ethereum property is already defined
      if (!Object.getOwnPropertyDescriptor(window, 'ethereum')) {
        // Define ethereum property with proper descriptors
        Object.defineProperty(window, 'ethereum', {
          value: undefined,
          writable: true,
          configurable: true,
          enumerable: true
        });

        // Add event listener for ethereum injection
        window.addEventListener('ethereum#initialized', () => {
          const { ethereum } = window;
          if (ethereum) {
            console.log('Ethereum provider detected');
          }
        }, { once: true });

        // Set a timeout to prevent hanging
        setTimeout(() => {
          if (!window.ethereum) {
            console.log('No Ethereum provider detected');
          }
        }, 3000);
      }
    } catch (error) {
      console.warn('Failed to configure ethereum property:', error);
    }
  })();
}