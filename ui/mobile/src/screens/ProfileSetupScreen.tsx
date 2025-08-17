import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ProfileSetupScreen() {
  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Complete Your KYC</Text>
      <TextInput placeholder="Aadhaar Number" style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <TextInput placeholder="PAN Number" style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <TextInput placeholder="Upload Income Proof" style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <Button title="Submit KYC" onPress={() => {}} />
    </View>
  );
}
