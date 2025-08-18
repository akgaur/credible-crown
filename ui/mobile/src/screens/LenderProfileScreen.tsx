import React from 'react';
import { Text, View } from 'react-native';

export default function LenderProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Lender Profile</Text>
      <Text>Complete your verification and view your profile.</Text>
      {/* Add verification steps as per wireframe */}
    </View>
  );
}
