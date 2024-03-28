import React from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 20px;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PaymentButton = styled.button`
  padding: 15px 30px;
  margin-right: 20px;
  background-color: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.color === '#007bff' ? '#0056b3' : '#bd2130')};
  }
`;

const Amount = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const EmptyCartMessage = styled.div`
  font-size: 1.8rem;
  color: #333;
`;

const Checkout = ({ amount }) => {
  const handlePayPalCheckout = () => {
    // Handle PayPal checkout logic
  };

  const handleMastercardCheckout = () => {
    // Handle Mastercard checkout logic
  };

  return (
    <CheckoutContainer>
      <h2>Checkout Page</h2>
      {amount !== null && amount !== undefined ? (
        <>
          <Amount>Total Amount: ${amount.toFixed(2)}</Amount>
          <PaymentMethod>
            <PaymentButton color="#007bff" onClick={handlePayPalCheckout}>
              Pay with PayPal
            </PaymentButton>
            <PaymentButton color="#dc3545" onClick={handleMastercardCheckout}>
              Pay with Mastercard
            </PaymentButton>
            
          </PaymentMethod>
        </>
      ) : (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
