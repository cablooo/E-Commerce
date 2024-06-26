// SignIn.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom'; // Import useHistory and Link from React Router
import app from '../firebase';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: none;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  pointer-events: auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 10px;
`;

const SignUpLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignIn = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate(); // Initialize useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      closeModal();

      await app.auth().signInWithEmailAndPassword(email, password);

      // Navigate to the products page after successful sign-in
      history('/E-Commerce/products');
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>Sign In</Title>
        <SignInForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign In</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </SignInForm>
        <p>
          Don't have an account? <SignUpLink to="/E-Commerce/signup">Create a new one</SignUpLink>
        </p>
      </ModalContent>
    </ModalBackground>
  );
};

export default SignIn;
