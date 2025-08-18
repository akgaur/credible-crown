import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>How It Works</Text>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>
        Credible Crown connects borrowers and lenders securely. All users complete KYC and credibility checks.
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 8 }}>
        Borrowers can request loans, and lenders can fund them after reviewing credibility and risk.
      </Text>
      <Text style={{ fontSize: 16 }}>
        All transactions are managed via escrow, with digital agreements and repayment tracking.
      </Text>
    </ScrollView>
  );
}
