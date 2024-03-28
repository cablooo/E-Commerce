import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSignedIn, signOut } from '../Reducers/LoggedIn'; // Import selectIsSignedIn, signOut, and selectCartItems
import { selectCartItems } from '../Reducers/cartSlice';

const NavContainer = styled.nav`
  background-color: #f2f2f2;
  padding: 20px;
  position: fixed;
  width: 100%;
  z-index: 999;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease;
  padding: 0.5rem;

  &:hover {
    color: #4CAF50;
  }
`;

const MenuIcon = styled.div`
  display: block; /* Ensure the menu icon is always displayed */
  cursor: pointer;

  @media screen and (min-width: 769px) {
    display: none; /* Hide the menu icon on larger screens */
  }
`;

const BurgerIcon = styled(FontAwesomeIcon)`
  color: #333;
  font-size: 1.5rem;
`;

const CloseIcon = styled(FontAwesomeIcon)`
  color: #333;
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 998;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileMenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const MobileMenuItem = styled.li`
  margin-bottom: 20px;
`;

const CartItemCount = styled.span`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px;
  font-size: 0.8rem;
`;

const SignInButton = styled(NavLink)`
  color: ${props => props.isSignedIn ? '#FF0000' : '#008000'};
`;

const Nav = () => {
  const isSignedIn = useSelector(selectIsSignedIn);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </NavItem>
        <NavItem>
          {isSignedIn ? (
            <SignInButton to='/signin' isSignedIn={isSignedIn} onClick={handleSignOut}>Sign Out</SignInButton>
          ) : (
            <SignInButton to='/signin' isSignedIn={isSignedIn}>Sign In</SignInButton>
          )}
        </NavItem>
        <NavItem>
          <NavLink to='/cart' onClick={closeMenu}>
            <FontAwesomeIcon icon={faCartShopping} />
            {totalQuantity > 0 && <CartItemCount>{totalQuantity}</CartItemCount>}
          </NavLink>
        </NavItem>
      </NavList>
      <MenuIcon onClick={() => setMenuOpen(true)}>
        <BurgerIcon icon={faBars} />
      </MenuIcon>
      {isMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <CloseIcon icon={faTimes} size="lg" onClick={() => setMenuOpen(false)} />
          <MobileMenuList>
            <MobileMenuItem>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </MobileMenuItem>
            <MobileMenuItem>
              {isSignedIn ? (
                <SignInButton to='/signin' isSignedIn={isSignedIn} onClick={handleSignOut}>Sign Out</SignInButton>
              ) : (
                <SignInButton to='/signin' isSignedIn={isSignedIn}>Sign In</SignInButton>
              )}
            </MobileMenuItem>
            <MobileMenuItem>
              <NavLink to='/cart' onClick={closeMenu}>
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity > 0 && <CartItemCount>{totalQuantity}</CartItemCount>}
              </NavLink>
            </MobileMenuItem>
          </MobileMenuList>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Nav;
