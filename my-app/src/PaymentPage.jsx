import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import './css/PaymentPage.css';

// Load your Stripe public key
const stripePromise = loadStripe('pk_test_51Q69BpRx2PGR0NoJxgJK61EU6shLWi2iLsRDIVJ2f3SCTx4svKTNWWCqd2jbBkIQj7qYgP3S4OeqOIce7XdcMIkJ001Dt2cCbl');

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
