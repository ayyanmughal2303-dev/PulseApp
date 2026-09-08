import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { storageService } from '../services/storageService';

export default function SettingsScreen({ navigation }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const handleToggleNotifications = async (value) => {
    setNotificationsEnabled(value);
    await storageService.saveData('@notifications_pref', value);
  };

  const handleToggleDarkMode = async (value) => {
    setDarkModeEnabled(value);
    await storageService.saveData('@dark_mode_pref', value);
  };

  const handleToggleAutoSync = async (value) => {
    setAutoSync(value);
    await storageService.saveData('@auto_sync_pref', value);
  };

  const handleClearCache = async () => {
    await storageService.removeData('@system_status_cache');
    Alert.alert('Success', 'Local application cache cleared successfully.');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Preferences</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Push Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleToggleNotifications}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={handleToggleDarkMode}
          />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Auto-Sync API Data</Text>
          <Switch
            value={autoSync}
            onValueChange={handleToggleAutoSync}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Data Management</Text>
        <TouchableOpacity style={styles.button} onPress={handleClearCache}>
          <Text style={styles.buttonText}>Clear App Cache</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#1a1a1a' },
  section: { marginBottom: 24, backgroundColor: '#fff', borderRadius: 8, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  sectionHeader: { fontSize: 16, fontWeight: '600', color: '#666', marginBottom: 12 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  settingLabel: { fontSize: 16, color: '#333' },
  button: { backgroundColor: '#dc3545', padding: 14, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});
