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
        <Text style={styles.sectionHeader}>User Preferences</Text>
        
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
          <Text style={styles.settingLabel}>Data Sync Frequency</Text>
          <Text style={styles.settingSubtext}>Every 15 minutes</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account Management</Text>
        <TouchableOpacity style={styles.menuRow} onPress={() => Alert.alert('Navigation', 'Navigating to Profile Information')}>
          <Text style={styles.settingLabel}>Profile Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuRow} onPress={() => Alert.alert('Navigation', 'Navigating to Change Password')}>
          <Text style={styles.settingLabel}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuRow} onPress={() => Alert.alert('Navigation', 'Navigating to Linked Accounts')}>
          <Text style={styles.settingLabel}>Linked Accounts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>About & Support</Text>
        <View style={styles.menuRow}>
          <Text style={styles.settingLabel}>App Version</Text>
          <Text style={styles.versionText}>v1.0.2</Text>
        </View>
        <TouchableOpacity style={styles.menuRow} onPress={() => Alert.alert('Info', 'Opening Privacy Policy')}>
          <Text style={styles.settingLabel}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 16 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#ffffff' },
  section: { marginBottom: 24, backgroundColor: '#1e293b', borderRadius: 12, padding: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
  sectionHeader: { fontSize: 16, fontWeight: '600', color: '#94a3b8', marginBottom: 12 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#334155' },
  menuRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#334155' },
  settingLabel: { fontSize: 16, color: '#f8fafc' },
  settingSubtext: { fontSize: 14, color: '#94a3b8' },
  versionText: { fontSize: 14, color: '#94a3b8' }
});
