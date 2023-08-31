import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; 
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './login-screen';

describe('LoginScreen Integration Test', () => {
  it('renders correctly and handles login', async () => {
    const mock = new MockAdapter(axios); 

    const mockData = {
      emailOrPhone: 'email',
      passwordOrMagicLink: 'password',
      borderRadius: 20,
      buttonColor: 'blue',
      logoUrl: 'src/assets/images/mock-logo.jpeg',
      logoPosition: 'top',
    };

    mock.onGet('https://reqres.in/api/users?page=2').reply(200, mockData);

    const { getByTestId, getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    );

    
    await waitFor(() => expect(mock.history.get.length).toBe(1));

    const emailInput = getByPlaceholderText('Email address/Phone number');
    const passwordInput = getByPlaceholderText('Password/Magic link');
    const loginButton = getByText('Login');

    
    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'testpassword');

    
    fireEvent.press(loginButton);

    mock.restore();
  });
});
