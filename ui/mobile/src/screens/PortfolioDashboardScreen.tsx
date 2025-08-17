import React from 'react';
import { View, Text } from 'react-native';

export default function PortfolioDashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Your Portfolio</Text>
      <Text>ROI: 12%</Text>
      <Text>Active Loans: 1</Text>
      <Text>Repayments Received: ₹0</Text>
    </View>
  );
}
