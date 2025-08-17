import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchLoanRequests } from '../api/dummyApi';

export default function LoanStatusScreen() {
  const [loans, setLoans] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchLoanRequests().then(setLoans);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Your Loan Requests</Text>
      <FlatList
        data={loans}
        keyExtractor={(item) => item.loan_id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Amount: ₹{item.amount}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}
