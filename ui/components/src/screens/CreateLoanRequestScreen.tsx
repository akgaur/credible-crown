import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CreateLoanRequestScreen() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [purpose, setPurpose] = useState('');

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Loan Request Details</Text>
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <TextInput placeholder="Interest Rate (%)" value={interest} onChangeText={setInterest} style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <TextInput placeholder="Tenure (months)" value={tenure} onChangeText={setTenure} style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <TextInput placeholder="Purpose" value={purpose} onChangeText={setPurpose} style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <Button title="Submit Loan Request" onPress={() => {}} />
    </View>
  );
}
