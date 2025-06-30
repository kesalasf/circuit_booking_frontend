import axios from 'axios';
import { data } from 'react-router-dom';

// Reuse auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// ✅ Get all room types
export const getAllRoomTypes = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/roomtype`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch room types:', error);
    throw error.response?.data || { message: 'Could not load room types' };
  }
};

// ✅ Get a room type by ID
export const getRoomTypeById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/roomtype/${id}`, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Failed to fetch room type by ID:', error);
    throw error.response?.data || { message: 'Could not load room type' };
  }
};

// ✅ Create a new room type
export const createRoomType = async (roomTypeData) => {
  try {
    const response = await axios.post(`http://localhost:3000/roomtype`, roomTypeData, getAuthHeaders());
    console.log(data)
    return response.data;
  } catch (error) {
    console.error('Failed to create room type:', error);
    throw error.response?.data || { message: 'Room type creation failed' };
  }
};

// ✅ Update a room type
export const updateRoomType = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3000/roomtype/${id}`, updatedData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error('Failed to update room type:', error);
    throw error.response?.data || { message: 'Room type update failed' };
  }
};

// ✅ Delete a room type
export const deleteRoomTypeById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3000/roomtype/${id}`, getAuthHeaders());
    return response.data;

  } catch (error) {
    console.error('Failed to delete room type:', error);
    throw error.response?.data || { message: 'Room type deletion failed' };
  }
};
