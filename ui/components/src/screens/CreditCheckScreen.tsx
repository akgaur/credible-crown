import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function CreditCheckScreen() {
  const [score, setScore] = useState<number | null>(null);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Check Your Credit Score</Text>
      <Button title="Fetch CIBIL Score" onPress={() => setScore(750)} />
      <Text style={{ marginTop: 16, fontSize: 18 }}>Score: {score ?? '-'}</Text>
    </View>
  );
}
