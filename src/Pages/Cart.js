import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  selectCartItems,
} from '../Reducers/cartSlice'; // Import selectCartItems
import { motion } from 'framer-motion';
import Checkout from './Checkout'; // Import the Checkout component

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  padding: 4rem 0;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
  border-bottom: 2px solid #333;
`;

const CartTitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
`;

const CartItemContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px;
`;

const CartItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const CartItemName = styled.h3`
  margin: 10px 0;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
`;

const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const CartItemQuantity = styled.div`
  font-size: 1.4rem;
  color: #666;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
  margin-top: 5px;
  border: 2px solid #333;
  border-radius: 5px;
  background-color: transparent;
  color: #333;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #bd2130;
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const TotalPrice = styled.h3`
  font-size: 2rem;
  color: #333;
`;

const PayNowButton = styled(Link)`
  padding: 15px 30px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const EmptyCartMessage = styled.div`
  font-size: 1.8rem;
  color: #333;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>My Cart</CartTitle>
      </CartHeader>
      <CartItemContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {items.map((item) => (
          <CartItem key={item.id}>
            <CartItemName>{item.name}</CartItemName>
            <img src={item.src} alt={item.name} style={{ width: '100%', maxWidth: '200px', marginBottom: '10px' }} />
            <CartItemInfo>
              <CartItemQuantity>Quantity: {item.quantity}</CartItemQuantity>
              <div>
                <QuantityButton onClick={() => handleDecreaseQuantity(item.id)}>-</QuantityButton>
                <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>+</QuantityButton>
              </div>
            </CartItemInfo>
            <RemoveButton onClick={() => handleRemoveItem(item.id)}>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartItemContainer>
      {items.length > 0 ? (
        <>
          <CheckoutContainer>
            <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
            {/* Render the Checkout component with the totalPrice prop */}
            <Checkout amount={totalPrice} />
          </CheckoutContainer>
          {/* Render other cart contents */}
        </>
      ) : (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      )}
    </CartContainer>
  );
};

export default Cart;
