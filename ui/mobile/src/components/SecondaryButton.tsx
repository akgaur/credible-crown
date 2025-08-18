import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export default function SecondaryButton({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eee',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 4,
  },
  text: {
    color: '#1976d2',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
