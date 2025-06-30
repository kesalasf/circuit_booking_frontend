
// src/api/userApi.jsx
import axios from 'axios';

export const loginUser = async (logindata) => {
  try {
    const response = await axios.post(`http://localhost:3000/user/login`, logindata);
    return response.data; 
  } catch (error) {
      console.error('Login failed::', error);
  }
};

