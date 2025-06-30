import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoomTypeById, updateRoomType } from '../../api/roomtypeApi';

const EditRoomType = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    num_adults: '',
    num_children: ''
  });

  const [originalData, setOriginalData] = useState(null);
  const [isDirty, setIsDirty] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRoomTypeById(id);
        setFormData(data);
        setOriginalData(data);
      } catch (err) {
        console.error('Error loading room type:', err);
        alert('Failed to load room type data');
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // Update isDirty based on comparison
    if (originalData) {
      setIsDirty(JSON.stringify(updatedForm) !== JSON.stringify(originalData));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRoomType(id, formData);
      alert('Room type updated successfully!');
      navigate(`/admin/roomtype`);
    } catch (error) {
      console.error('Error updating room type:', error);
      alert('Failed to update room type');
    }
  };

  const handleBack = () => {
    navigate(`/admin/roomtype`);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg bg-white rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Edit Room Type</h2>
    
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium">Room Type Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

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

        <div>
          <label htmlFor="num_adults" className="block font-medium">Number of Adults</label>
          <input
            id="num_adults"
            type="number"
            name="num_adults"
            value={formData.num_adults}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="num_children" className="block font-medium">Number of Children</label>
          <input
            id="num_children"
            type="number"
            name="num_children"
            value={formData.num_children}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

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

export default EditRoomType;
