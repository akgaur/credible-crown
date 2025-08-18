import React from 'react';
import { Text, View } from 'react-native';

export default function ProfileSetupScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Profile Setup</Text>
      <Text>Complete your KYC: Aadhaar, PAN, and income proof.</Text>
      {/* Add form fields and upload buttons as per wireframe */}
    </View>
  );
}
