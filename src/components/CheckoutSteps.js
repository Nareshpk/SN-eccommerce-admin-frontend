import React from 'react';
export default function CheckoutSteps(PropTypes) {
  return (
    <div className="row checkout-steps">
      <div className={PropTypes.step1 ? 'active' : ''}>Sign-In</div>
      <div className={PropTypes.step5 ? 'active' : ''}>Admin-In</div>
      <div className={PropTypes.step2 ? 'active' : ''}>Shipping</div>
      <div className={PropTypes.step3 ? 'active' : ''}>Payment</div>
      <div className={PropTypes.step4 ? 'active' : ''}>Place Order</div>
    </div>
  );
}