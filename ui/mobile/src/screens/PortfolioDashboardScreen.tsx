import React from 'react';
import { Text, View } from 'react-native';

export default function PortfolioDashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Portfolio Dashboard</Text>
      <Text>Track your investments, ROI, and repayments.</Text>
      {/* Add portfolio summary and charts as per wireframe */}
    </View>
  );
}
