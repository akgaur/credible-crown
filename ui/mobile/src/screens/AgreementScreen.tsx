import React from 'react';
import { Text, View } from 'react-native';

export default function AgreementScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Agreement</Text>
      <Text>Review and sign your loan agreement digitally.</Text>
      {/* Add agreement preview and e-sign button as per wireframe */}
    </View>
  );
}
