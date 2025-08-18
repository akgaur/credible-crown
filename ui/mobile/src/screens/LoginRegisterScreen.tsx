import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../components/Input';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

export default function LoginRegisterScreen() {
  const [aadhaar, setAadhaar] = useState('');
  const [contact, setContact] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = () => {
    setOtpSent(true);
  };

  const handleFingerprintLogin = () => {
    alert('Fingerprint login (dummy)');
  };

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Login or Register</Text>
      <Input
        placeholder="Aadhaar Number"
        value={aadhaar}
        onChangeText={setAadhaar}
        keyboardType="numeric"
        style={{ marginBottom: 12 }}
      />
      <Input
        placeholder="Phone or Email"
        value={contact}
        onChangeText={setContact}
        keyboardType="default"
        style={{ marginBottom: 12 }}
      />
      <PrimaryButton title="Send OTP" onPress={handleSendOtp} />
      <SecondaryButton title="Login with Fingerprint" onPress={handleFingerprintLogin} style={{ marginTop: 12 }} />
      {otpSent && (
        <Text style={{ color: 'green', marginTop: 16 }}>OTP sent! (dummy message)</Text>
      )}
    </View>
  );
}
