import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchRepayments } from '../api/dummyApi';

export default function RepaymentDashboardScreen() {
  const [repayments, setRepayments] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchRepayments().then(setRepayments);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Repayment Dashboard</Text>
      <FlatList
        data={repayments}
        keyExtractor={(item) => item.repayment_id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Due Date: {item.due_date}</Text>
            <Text>Amount Due: ₹{item.amount_due}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}
