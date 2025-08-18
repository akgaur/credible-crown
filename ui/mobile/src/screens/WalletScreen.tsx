import React from 'react';
import { Text, View } from 'react-native';

export default function WalletScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Wallet & Transactions</Text>
      <Text>View your escrow balance and transaction history.</Text>
      {/* Add wallet balance and transaction list as per wireframe */}
    </View>
  );
}
