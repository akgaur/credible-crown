import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>How Credible Crown Works</Text>
      <Text style={{ marginTop: 12 }}>
        Borrowers and lenders connect securely. All users complete KYC and credibility checks. Transactions are managed via escrow accounts. Agreements are digitally signed and repayments are tracked automatically.
      </Text>
    </ScrollView>
  );
}
