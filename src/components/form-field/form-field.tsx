import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface FormFieldProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ placeholder, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 50,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 15,
    color: 'rgb(192,190,190)',
    backgroundColor: 'rgb(255,255,255)',
    marginTop: 20,
  },
});

export default FormField;
