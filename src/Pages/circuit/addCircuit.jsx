import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCircuitBungalow } from '../../api/circuitApi';

const AddCircuitBungalow = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    caretaker_name: '',
    caretaker_phone: '',
    image_url: ''
  });

  const [isChanged, setIsChanged] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsChanged(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCircuitBungalow(formData);
      alert('Circuit Bungalow added successfully!');
      navigate('/circuit-bungalows');
    } catch (error) {
      console.error('Error adding bungalow:', error);
      alert('Failed to add circuit bungalow.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Add New Circuit Bungalow</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'location', 'caretaker_name', 'caretaker_phone', 'image_url'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block font-medium">
              {field.replace('_', ' ').toUpperCase()}
            </label>
            <input
              id={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required={['name', 'location', 'caretaker_name', 'caretaker_phone'].includes(field)}
            />
          </div>
        ))}
        <div>
          <label htmlFor="description" className="block font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div className="flex justify-between gap-4">
          <button
            type="button"
            className="w-1/2 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition"
            onClick={() => navigate('/admin')}
          >
            Back
          </button>
          <button
            type="submit"
            className={`w-1/2 text-white p-2 rounded transition ${isChanged ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!isChanged}
          >
            Add Circuit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCircuitBungalow;
