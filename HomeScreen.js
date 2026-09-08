import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const dummyData = [
  { id: '1', title: 'System Pulse Check', description: 'All core microservices operating at optimal capacity.' },
  { id: '2', title: 'API Sync Status', description: 'Last successful synchronization completed 2 minutes ago.' },
  { id: '3', title: 'Security Audit', description: 'No vulnerabilities detected in the recent automated scan.' },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard Overview</Text>
      
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Settings')}
      >
        <Text style={styles.buttonText}>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 40, textAlign: 'center' },
  listContainer: { paddingBottom: 20 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: '#e0e0e0' },
  cardTitle: { fontSize: 18, fontWeight: '600', marginBottom: 6, color: '#333' },
  cardDescription: { fontSize: 14, color: '#666' },
  button: { height: 50, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginTop: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
