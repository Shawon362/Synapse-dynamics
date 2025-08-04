import { initializePaddle } from '@paddle/paddle-js';
import { useEffect, useState } from 'react';

// This uses Vite's syntax to get the environment variable
const PADDLE_CLIENT_TOKEN = import.meta.env.VITE_PADDLE_CLIENT_TOKEN;

export const usePaddle = () => {
  const [paddle, setPaddle] = useState(null);

  useEffect(() => {
    // Only initialize if the token exists
    if (PADDLE_CLIENT_TOKEN) {
      initializePaddle({
        environment: 'sandbox', // Use 'sandbox' for testing
        token: PADDLE_CLIENT_TOKEN,
      }).then((paddleInstance) => {
        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      });
    } else {
      console.error("Paddle Client Token is not set in your .env file.");
    }
  }, []);

  const openCheckout = (priceId) => {
    if (paddle) {
      paddle.Checkout.open({
        items: [{ priceId, quantity: 1 }],
      });
    } else {
      console.error("Paddle is not initialized yet.");
    }
  };

  return { openCheckout };
};