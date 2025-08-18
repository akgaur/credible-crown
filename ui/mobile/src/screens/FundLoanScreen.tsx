import React from 'react';
import { Text, View } from 'react-native';

export default function FundLoanScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Fund Loan</Text>
      <Text>Fund a loan securely via escrow.</Text>
      {/* Add funding form and escrow details as per wireframe */}
    </View>
  );
}
