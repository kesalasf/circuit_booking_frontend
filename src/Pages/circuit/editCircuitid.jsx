import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCircuitBungalowById, updateCircuitBungalow } from '../../api/circuitApi';

const EditCircuitBungalow = ({ id }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    description: '',
    caretaker_name: '',
    caretaker_phone: '',
    image_url: ''
  });

  const [isDirty, setIsDirty] = useState(false); // To track changes

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCircuitBungalowById(id);
        setFormData(data);
      } catch (err) {
        alert('Failed to load data');
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsDirty(true); // Mark form as dirty on any field change
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateCircuitBungalow(id, formData);
      alert('Updated successfully!');
      navigate(`/admin/circuit`);
    } catch (error) {
      alert('Update failed');
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate(`/admin/circuit`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Edit Circuit Bungalow</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="caretaker_name"
          placeholder="Caretaker Name"
          value={formData.caretaker_name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="caretaker_phone"
          placeholder="Caretaker Phone"
          value={formData.caretaker_phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={formData.image_url}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <div className="flex justify-between gap-4">
          <button
            type="button"
            onClick={handleBack}
            className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 transition"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!isDirty}
            className={`w-full text-white p-2 rounded transition ${
              isDirty ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCircuitBungalow;
