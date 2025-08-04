// src/hooks/usePaddle.js

import { initializePaddle } from '@paddle/paddle-js'; // Corrected line
import { useEffect, useState } from 'react';

// Get your client token from environment variables
const PADDLE_CLIENT_TOKEN = import.meta.env.VITE_PADDLE_CLIENT_TOKEN;

export const usePaddle = () => {
  const [paddle, setPaddle] = useState(null);

  // Initialize Paddle on component mount
  useEffect(() => {
    initializePaddle({
      environment: 'sandbox', // Use 'sandbox' for testing
      token: PADDLE_CLIENT_TOKEN,
    }).then((paddleInstance) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  // Function to open the checkout
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