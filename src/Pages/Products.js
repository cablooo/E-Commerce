// Import React and other necessary libraries
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../Reducers/cartSlice';
import products from '../data'; // Import the products data
import { selectIsSignedIn } from '../Reducers/LoggedIn';
import Sidebar from '../Components/Sidebar'; // Import the Sidebar component

// Styled component for the main container
const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow flex items to wrap to the next line */
`;

// Styled component for the sidebar container
const SidebarContainer = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f0f0f0;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// Styled component for the products container
const ProductsContainer = styled.div`
  flex: 1;
  padding: 4rem 2rem; /* Adjust padding for smaller screens */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

// Styled component for the individual product card
const ProductCard = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }

  h3,
  p {
    margin: 10px 0;
    text-align: center;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

// Styled component for the button
const Button = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background-color: ${(props) => (props.cart ? '#FF6347' : '#4CAF50')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.cart ? '#CD5C5C' : '#3e8e41')};
  }
`;

// Define the Products component
const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isSignedIn = useSelector(selectIsSignedIn);
  let history = useNavigate();

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterType, setFilterType] = React.useState([]);

  // Define filteredProducts variable
  const filteredProducts = products.filter((product) => {
    if (filterType.length === 0) {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        filterType.includes(product.type)
      );
    }
  });

  const handleAddToCart = (product) => {
    if (isSignedIn) {
      dispatch(addItemToCart(product));
    } else {
      history('/E-Commerce/signin');
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterType([...filterType, value]);
    } else {
      setFilterType(filterType.filter((type) => type !== value));
    }
  };

  return (
    <MainContainer>
      {/* Sidebar component */}
      <SidebarContainer>
        <Sidebar
          products={products}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          handleCheckboxChange={handleCheckboxChange}
        />
      </SidebarContainer>

      {/* Products container */}
      <ProductsContainer>
        {filteredProducts.map((product, i) => (
          <ProductCard key={`product-${i}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to={`/E-Commerce/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.img
                src={product.src}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
            {isInCart(product.id) ? (
              <Button cart onClick={() => handleRemoveFromCart(product.id)}>
                Remove from Cart
              </Button>
            ) : (
              <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            )}
          </ProductCard>
        ))}
      </ProductsContainer>
    </MainContainer>
  );
};

export default Products; // Export the Products component
