import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './css/CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [isPaymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentLoading(true); // Start loading state

    const response = await fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000 }), // Set the amount as needed
    });

    const { clientSecret } = await response.json();

    // Check if the clientSecret is in the expected format
    if (!clientSecret || !clientSecret.includes('_secret_')) {
      console.error('Invalid client secret returned:', clientSecret);
      setError('Invalid payment session. Please try again.');
      setPaymentLoading(false); // Reset loading state
      return; // Early exit if the client secret is invalid
    }

    // Get the card element
    const cardElement = elements.getElement(CardElement); // Get the CardElement

    // Confirm the payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement, // Pass the card element here
        billing_details: {
          name: 'Customer Name', // Set the customer's name
        },
      },
    });

    // Handle the payment result
    if (result.error) {
      // Show error to your customer
      console.error(result.error.message);
      setError(result.error.message); // Set the error state to display it
      setPaymentLoading(false); // Reset loading state
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment successful!');
        // You might want to redirect or show a success message here
      }
      setPaymentLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement /> {/* Use the built-in CardElement */}
      <button disabled={!stripe || isPaymentLoading}>
        {isPaymentLoading ? 'Processing...' : 'Pay'}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CheckoutForm;
