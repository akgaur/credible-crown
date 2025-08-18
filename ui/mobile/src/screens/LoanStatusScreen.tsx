import React from 'react';
import { Text, View } from 'react-native';

export default function LoanStatusScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Loan Status</Text>
      <Text>Track your loan request status and matching progress.</Text>
      {/* Add status/matching UI as per wireframe */}
    </View>
  );
}
