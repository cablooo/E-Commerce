// ProductDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  selectCartItemQuantity,
} from '../Reducers/cartSlice'; // Import selectCartItemQuantity
import { signIn } from '../Reducers/LoggedIn';
import products from '../data';
import { selectIsSignedIn } from '../Reducers/LoggedIn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const ProductName = styled.h2`
  margin: 20px 0;
`;

const Price = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.2rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? '#4CAF50' : '#FF6347')};
  }
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const QuantityLabel = styled.span`
  margin-right: 10px;
  font-size: 1rem;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  font-size: 1rem;
  text-align: center;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((product) => product.id === productId);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate hook
  const isAuthenticated = useSelector(selectIsSignedIn);
  const isInCart = useSelector((state) =>
    state.cart.items.some((item) => item.id === productId)
  );

  const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addItemToCart({ ...product, quantity }));
    } else {
      navigate('/E-Commerce/signin'); // Navigate to sign-in page
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(productId));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <Container>Product not found</Container>;
  }

  return (
    <Container>
      <ProductName>{product.name}</ProductName>
      <ProductImage
        src={product.src}
        alt={product.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <Price>${product.price}</Price>
      <Description>{product.description}</Description>
      <FeatureList>
        {product.features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeatureList>
      <ButtonContainer>
        <QuantityContainer>
          <QuantityLabel>Quantity:</QuantityLabel>
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleDecreaseQuantity}>
            -
          </Button>
          <QuantityInput type="number" value={quantity} readOnly />
          <Button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleIncreaseQuantity}>
            +
          </Button>
        </QuantityContainer>
      </ButtonContainer>
      <ButtonContainer>
        {isInCart ? (
          <Button
            primary
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            primary={!isInCart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
          >
            {isAuthenticated ? 'Add to Cart' : 'Sign in to Add'}
          </Button>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ProductDetails;
