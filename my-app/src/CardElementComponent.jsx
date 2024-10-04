import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardElementComponent = ({ setError }) => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <div>
      <CardElement
        options={{
          style: {
            base: {
              color: '#32325d',
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: 'antialiased',
              fontSize: '16px',
              width:'200px',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a',
            },
          },
        }}
        onReady={() => console.log('CardElement ready')}
        onChange={(event) => {
          if (event.error) {
            setError(event.error.message); // Set the error if one occurs
          } else {
            setError(null); // Clear error if no error
          }
        }}
      />
    </div>
  );
};

export default CardElementComponent;
