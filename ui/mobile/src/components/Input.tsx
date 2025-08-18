import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="#888"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
  },
});
