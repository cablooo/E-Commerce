// SignUp.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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

const SignUpForm = styled.form`
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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);

      await app.auth().createUserWithEmailAndPassword(email, password);
      // Optionally, you can automatically sign in the user after sign-up
      await app.auth().signInWithEmailAndPassword(email, password);

      // Navigate to the products page after successful sign-up and sign-in
      history('/E-Commerce/products');
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <Title>Sign Up</Title>
        <SignUpForm onSubmit={handleSubmit}>
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
          <Button type="submit">Sign Up</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </SignUpForm>
      </ModalContent>
    </ModalBackground>
  );
};

export default SignUp;
