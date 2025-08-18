import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function FundLoanScreen() {
  const [amount, setAmount] = useState('');

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Fund Loan</Text>
      <TextInput placeholder="Amount to Fund" value={amount} onChangeText={setAmount} style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <Button title="Proceed to Escrow" onPress={() => {}} />
    </View>
  );
}
