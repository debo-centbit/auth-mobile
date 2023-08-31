import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './button'; 

describe('Button component', () => {
  it('renders "Back" button correctly', () => {
    const { getByText } = render(<Button variant="back" label="Back" />);
    const backButton = getByText('Back');
    expect(backButton).toBeTruthy();
  });

  it('renders "Login" button correctly', () => {
    const { getByText } = render(<Button variant="login" label="Login" />);
    const loginButton = getByText('Login');
    expect(loginButton).toBeTruthy();
  });

  it('calls onPress function when "Back" button is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button variant="back" label="Back" onPress={mockOnPress} />
    );
    const backButton = getByText('Back');
    fireEvent.press(backButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('calls onPress function when "Login" button is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button variant="login" label="Login" onPress={mockOnPress} />
    );
    const loginButton = getByText('Login');
    fireEvent.press(loginButton);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});



