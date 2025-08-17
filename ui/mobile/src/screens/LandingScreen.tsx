import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, any>;

export default function LandingScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Credible Crown</Text>
      <Text style={{ marginVertical: 8 }}>Peer-to-peer lending made secure and simple.</Text>
      <Button title="Login / Register" onPress={() => navigation.navigate('LoginRegister')} />
      <Button title="About / How it Works" onPress={() => navigation.navigate('About')} />
    </View>
  );
}
