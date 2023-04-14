import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user';

export const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Error registering user' };
  }
};

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Error logging in user' };
  }
};

export const getProfile = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/resources/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Error fetching user profile' };
  }
};

export const updateProfile = async (token, formData) => {
  try {
    const response = await axios.put(`${API_URL}/resources/profile`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Error updating user profile' };
  }
};

export const getResources = async (token, query) => {
  try {
    const response = await axios.get(`${API_URL}/resources/generate`, {
      params: { query },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: 'Error fetching resources' };
  }
};