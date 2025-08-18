import React from 'react';
import { Text, View } from 'react-native';

export default function CreateLoanRequestScreen() {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Create Loan Request</Text>
      <Text>Enter amount, interest, tenure, and purpose.</Text>
      {/* Add form fields as per wireframe */}
    </View>
  );
}
