import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginRegisterScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Login or Register</Text>
      <TextInput placeholder="Aadhaar Number" style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <TextInput placeholder="Phone or Email" style={{ borderBottomWidth: 1, marginVertical: 8 }} />
      <Button title="Send OTP" onPress={() => {}} />
      <Button title="Login with Fingerprint" onPress={() => {}} />
    </View>
  );
}
