// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSignedIn, signIn } from './Reducers/LoggedIn'; // Corrected import path
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';
import GlobalStyle from './Components/GlobalStyles';
import SignIn from './Pages/SignIn';
import Checkout from './Pages/Checkout';

function App() {
  const isSignedIn = useSelector(selectIsSignedIn); // Modified selector import
  const dispatch = useDispatch();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  useEffect(() => {
    // Check if user was previously signed in from local storage
    const storedIsSignedIn = localStorage.getItem('isSignedIn');
    if (storedIsSignedIn === 'true') {
      dispatch(signIn());
    }
  }, [dispatch]);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  

  return (
    <BrowserRouter>
      <div>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/signin" element={<SignIn closeModal={closeSignInModal} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        {isSignedIn && <div></div>}
        {isSignInModalOpen && <SignIn closeModal={closeSignInModal} />}
      </div>
    </BrowserRouter>
  );
}

const CheckoutPage = () => {
  const location = useLocation();
  const totalPrice = location.state ? location.state.totalPrice : null;

  return (
    <Checkout amount={totalPrice} />
  );
};

export default App;
