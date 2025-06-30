import React, { useState } from 'react';
import { createRoomType } from '../../api/roomtypeApi.jsx';
import { useNavigate } from 'react-router-dom';

const AddRoomType = () => {
  const [roomType, setRoomType] = useState({
    name: '',
    description: '',
    num_adults: '', 
    num_children: ''
  });

const navigate = useNavigate(); // ✅

  const handleChange = (e) => {
    setRoomType({ ...roomType, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRoomType(roomType);
      alert('Room type added successfully');
       navigate('/admin'); 

    } catch (error) {
      alert('Error adding room type');
      console.log(error);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Room Type</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={roomType.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={roomType.description}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Number of Adults</label>
          <input
            type="number"
            name="num_adults"
            value={roomType.num_adults}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Number of Children</label>
          <input
            type="number"
            name="num_children"
            value={roomType.num_children}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddRoomType;
