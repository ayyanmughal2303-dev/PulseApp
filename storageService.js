import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageService = {
  async saveData(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (e) {
      console.error('Error saving data to local storage', e);
      return false;
    }
  },

  async getData(key) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error reading data from local storage', e);
      return null;
    }
  },

  async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Error removing data from local storage', e);
      return false;
    }
  }
};
