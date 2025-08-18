import React from 'react';
import { Text, View } from 'react-native';

export default function CreditCheckScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Credit Check</Text>
      <Text>Fetch and display your CIBIL score here.</Text>
      {/* Add CIBIL fetch logic and display as per wireframe */}
    </View>
  );
}
