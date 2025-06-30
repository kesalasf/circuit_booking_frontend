import React, { useEffect, useState } from 'react';
import { getAllRoomTypes , deleteRoomTypeById } from '../../api/roomtypeApi.jsx';
import { Link } from 'react-router-dom';

const RoomTypeDetails = () => {
  const [roomTypes, setRoomTypes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllRoomTypes();
      setRoomTypes(data);
    } catch (error) {
      console.error('Error fetching room types:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this room type?');
    if (!confirmDelete) 
        return;

    try {
      const response = await deleteRoomTypeById(id);
      const message = response?.message || 'Room type deleted successfully.';
      alert(message);
      fetchData(); 
    } catch (error) {
      console.error('Error deleting room type:', error);
      const serverMessage = error?.response?.data?.message;
      if (serverMessage) {
        alert(`Delete failed: ${serverMessage}`);
      } else {
        alert('An unexpected error occurred while deleting the room type.');
      }
    }
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>Room Type Details</h1>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Room Type Name</th>
              <th>Description</th>
              <th>NO Adults</th>
              <th>NO Children</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roomTypes.map((type) => (
              <tr key={type.id}>
                <td>{type.id}</td>
                <td>{type.name}</td>
                <td>{type.description}</td>
                <td>{type.num_adults}</td>
                <td>{type.num_children}</td>

                <td>
                  <Link to={`/admin/roomtype/edit/${type.id}`} style={{ marginRight: '10px' }}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(type.id)} style={{ color: 'red' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '20px' }}>
          <Link to="/admin/roomtype/new">New</Link>
        </div>
      </div>
    </div>
  );
};

export default RoomTypeDetails;
