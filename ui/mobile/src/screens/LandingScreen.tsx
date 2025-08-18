import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Credible Crown</Text>
      <Text style={styles.tagline}>Peer-to-peer lending made secure, transparent, and easy.</Text>
      <View style={styles.features}>
        <Text style={styles.feature}>• Secure Escrow</Text>
        <Text style={styles.feature}>• Verified KYC & CIBIL</Text>
        <Text style={styles.feature}>• Digital Agreements</Text>
        <Text style={styles.feature}>• Fast, Transparent Process</Text>
      </View>
      <TouchableOpacity
        style={styles.ctaButton}
        onPress={() => navigation.navigate('LoginRegister')}
      >
        <Text style={styles.ctaText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f8fafc' },
  logo: { width: 120, height: 120, marginBottom: 24 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1e293b', marginBottom: 8 },
  tagline: { fontSize: 16, color: '#334155', textAlign: 'center', marginBottom: 24 },
  features: { marginBottom: 32 },
  feature: { fontSize: 15, color: '#0ea5e9', marginBottom: 4 },
  ctaButton: { backgroundColor: '#0ea5e9', borderRadius: 8, paddingVertical: 14, paddingHorizontal: 48 },
  ctaText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
