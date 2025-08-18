import React from 'react';
import { Text, View } from 'react-native';

export default function RepaymentDashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Repayment Dashboard</Text>
      <Text>View your repayment schedule and history.</Text>
      {/* Add repayment tracking UI as per wireframe */}
    </View>
  );
}
