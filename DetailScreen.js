import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { itemTitle, itemDescription } = route.params || {
    itemTitle: 'System Pulse Check',
    itemDescription: 'All core microservices operating at optimal capacity with zero packet loss.',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{itemTitle}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionHeader}>Detailed Metrics</Text>
        <Text style={styles.description}>{itemDescription}</Text>
        
        <View style={styles.metaBox}>
          <Text style={styles.metaLabel}>Status:</Text>
          <Text style={styles.metaValue}>Operational</Text>
        </View>
        <View style={styles.metaBox}>
          <Text style={styles.metaLabel}>Uptime:</Text>
          <Text style={styles.metaValue}>99.98%</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f9f9f9', justifyContent: 'center' },
  headerContainer: { marginBottom: 24, marginTop: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111', textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 24, borderWidth: 1, borderColor: '#eee', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  sectionHeader: { fontSize: 18, fontWeight: '600', marginBottom: 12, color: '#333' },
  description: { fontSize: 15, color: '#666', lineHeight: 22, marginBottom: 20 },
  metaBox: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  metaLabel: { fontSize: 14, fontWeight: '500', color: '#888' },
  metaValue: { fontSize: 14, fontWeight: '600', color: '#2e7d32' },
  button: { height: 50, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
