import axios from 'axios';


const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken'); // or sessionStorage.getItem('token')
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Get all circuits
export const getAllCircuits = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/circuit`);
    return response.data; // returns array of circuits
  } catch (error) {
    console.error('Failed to fetch circuits:', error);
  }
};



export const deleteCircuitById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/circuit/${id}`, getAuthHeaders())
    return response.data; // ✅ return response data if needed
  } catch (error) {
    console.error('API error in deleteCircuitById:', error);
  }
};


export const createCircuitBungalow = async (bungalowData) => {
  try {
    const response = await axios.post(`http://localhost:3000/circuit`, bungalowData, getAuthHeaders());
    
    return response.data;
  } catch (error) {
    console.error('Failed to create circuit bungalow:', error);
  }
};

export const updateCircuitBungalow = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3000/circuit/${id}`, updatedData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Error updating bungalow:', error);
  }
};


export const getCircuitBungalowById = async (id) => {
  try {
 const response = await axios.get(`http://localhost:3000/circuit/${id}`, getAuthHeaders());
  return response.data;
  }
   catch (error) {
    console.error('Error loading bungalow:', error);
  }
};


export const getCircuitNameList = async() =>{
    try {
 const response = await axios.get("http://localhost:3000/circuit/aa", getAuthHeaders());
  return response.data;
  }
   catch (error) {
    console.error('Error loading bungalow:', error);
  }
};


