// UserProducts.js
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components and other imports...

const UserProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
  margin: auto;
  padding: 2rem 5rem;
  justify-content: center;
  align-items: center;
`;

// Other styled components...

const UserProducts = () => {
  const userProducts = useSelector((state) => state.user.products); // Access user-specific products

  return (
    <UserProductsContainer>
      {userProducts.map((product, i) => (
        <ProductCard
          key={`product-${i}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Render product details */}
        </ProductCard>
      ))}
    </UserProductsContainer>
  );
};

export default UserProducts;
