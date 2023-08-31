import React from 'react';
import { render } from '@testing-library/react-native';
import FormField from './form-field';

describe('FormField', () => {
  it('renders correctly with placeholder', () => {
    const { getByPlaceholderText } = render(<FormField placeholder="Username" />);
    const inputElement = getByPlaceholderText('Username');
    expect(inputElement).toBeDefined();
  });

  it('renders correctly with secure text entry', () => {
    const { getByPlaceholderText } = render(<FormField placeholder="Password" secureTextEntry />);
    const inputElement = getByPlaceholderText('Password');
    expect(inputElement.props.secureTextEntry).toBe(true);
  });
});
