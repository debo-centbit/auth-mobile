import React from 'react';
import { render } from '@testing-library/react-native';
import Logo from './logo';

describe('Logo', () => {
  it('renders correctly with top position', () => {
    const { getByTestId } = render(<Logo logoUrl="logo-url" logoPosition="top" />);
    const logoContainer = getByTestId('logo-container');
    expect(logoContainer.props.style).toContainEqual(expect.objectContaining({ top: 110 }));
  });

  it('renders correctly with bottom position', () => {
    const { getByTestId } = render(<Logo logoUrl="logo-url" logoPosition="bottom" />);
    const logoContainer = getByTestId('logo-container');
    expect(logoContainer.props.style).toContainEqual(expect.objectContaining({ bottom: 20 }));
  });

  it('renders logo image correctly', () => {
    const { getByTestId } = render(<Logo logoUrl="logo-url" logoPosition="top" />);
    const logoImage = getByTestId('logo-image');
    expect(logoImage.props.source).toEqual({ uri: 'logo-url' });
  });
});
