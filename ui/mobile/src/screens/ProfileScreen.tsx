import React from 'react';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Profile</Text>
      <Text>Manage your KYC, settings, and verification status.</Text>
      {/* Add profile details and settings as per wireframe */}
    </View>
  );
}
