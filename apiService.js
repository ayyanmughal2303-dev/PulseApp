import axios from 'axios';

const API_BASE_URL = 'https://api.pulseapp.dev/v1';

export const apiService = {
  async fetchSystemStatus(token) {
    try {
      const response = await axios.get(`${API_BASE_URL}/status`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API fetch error:', error.response?.data || error.message);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to connect to PulseApp servers.' 
      };
    }
  },

  async postMetricsUpdate(token, payload) {
    try {
      const response = await axios.post(`${API_BASE_URL}/metrics`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      console.error('API post error:', error.response?.data || error.message);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to submit metrics update.' 
      };
    }
  }
};
