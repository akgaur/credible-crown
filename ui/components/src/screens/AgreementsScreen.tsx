import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { fetchAgreements } from '../api/dummyApi';

export default function AgreementsScreen() {
  const [agreements, setAgreements] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchAgreements().then(setAgreements);
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Agreements & E-Sign</Text>
      <FlatList
        data={agreements}
        keyExtractor={(item) => item.agreement_id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 8 }}>
            <Text>Agreement #{item.agreement_id}</Text>
            <Text>Signed by Borrower: {item.signed_by_borrower ? 'Yes' : 'No'}</Text>
            <Text>Signed by Lender: {item.signed_by_lender ? 'Yes' : 'No'}</Text>
            <Button title="E-Sign" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}
