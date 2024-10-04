import React from 'react';
import { Link } from 'react-router-dom';
import './css/PlansPage.css'

const PlansPage = () => {
  return (
    <div className="pricing-plans">
      <h1>Choose Your Plan</h1>
      <div className="plan free-plan">
        <h2>Free Plan</h2>
        <p>Basic features available for all users.</p>
      </div>
      <div className="plan premium-plan">
        <h2>Premium Plan</h2>
        <p>Get more customization, support, and analytics.</p>
        <Link to="/payment">Choose Premium</Link>
      </div>
    </div>
  );
};

export default PlansPage;
