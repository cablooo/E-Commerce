import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectIsSignedIn } from '../Reducers/LoggedIn'; // Import the selector for sign-in status

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const ContactForm = styled.form`
  display: ${(props) => (props.isSignedIn ? 'block' : 'none')};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SignInMessage = styled.p`
  font-size: 1rem;
  color: #ff3333;
`;

function Contact() {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <ContactContainer>
      <FormContainer>
        <h1>Contact Us</h1>
        <p>If you have any questions or concerns, please don't hesitate to contact us.</p>
        <ContactForm isSignedIn={isSignedIn}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" rows="4" />
          </FormGroup>
          <Button type="submit">Send Message</Button>
        </ContactForm>
        {!isSignedIn && <SignInMessage>Please sign in to send a message.</SignInMessage>}
      </FormContainer>
    </ContactContainer>
  );
}

export default Contact;
