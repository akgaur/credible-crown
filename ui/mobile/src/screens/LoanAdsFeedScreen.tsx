import React from 'react';
import { Text, View } from 'react-native';

export default function LoanAdsFeedScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Loan Ads Feed</Text>
      <Text>Browse and filter loan requests from borrowers.</Text>
      {/* Add loan ads list and filters as per wireframe */}
    </View>
  );
}
