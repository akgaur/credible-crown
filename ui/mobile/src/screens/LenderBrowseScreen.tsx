import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { fetchLoanRequests } from '../api/dummyApi';

export default function LenderBrowseScreen() {
  const [loans, setLoans] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchLoanRequests().then(setLoans);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Available Loan Requests</Text>
      <FlatList
        data={loans}
        keyExtractor={(item) => item.loan_id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Amount: ₹{item.amount}</Text>
            <Text>Interest: {item.interest_rate}%</Text>
            <Button title="Fund Loan" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}
