import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface LogoProps {
  logoUrl: string;
  logoPosition: 'top' | 'bottom';
}

const Logo: React.FC<LogoProps> = ({ logoUrl, logoPosition }) => {
  const positionStyle = logoPosition === 'top' ? styles.top : styles.bottom;

  return (
    <View style={[styles.container, positionStyle]}>
      <Image source={{ uri: logoUrl }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignSelf: 'center',
  },
  top: {
    top: 110,
  },
  bottom: {
    bottom: 20,
  },
  logo: {
    height: 100,
    width: 100,
    marginTop: 20,
  },
});

export default Logo;
