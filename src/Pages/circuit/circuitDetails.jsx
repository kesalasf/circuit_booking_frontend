import React, { useEffect, useState } from 'react';
import { getAllCircuits, deleteCircuitById } from '../../api/circuitApi'; // import delete API
import { Link } from 'react-router-dom';

const CircuitDetails = () => {
  const [circuitData, setCircuitData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllCircuits();
      setCircuitData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this circuit?');
    if (!confirmDelete) 
    return;
  
    try {
    
      const response = await deleteCircuitById(id); 
      const message = response?.data?.message || 'Circuit deleted successfully.';
      alert(message);
      fetchData(); 

    } catch (error) {
      console.error('Error deleting circuit:', error);
      const serverMessage = error?.response?.data?.message;
      if (serverMessage) {
        alert(`Delete failed: ${serverMessage}`);
      } else {
        alert('An unexpected error occurred while deleting the circuit.');
      }
    }
  };
  
  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h1>Circuit Details</h1>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Circuit Name</th>
              <th>Location</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {circuitData.map((circuit) => (
              <tr key={circuit.id}>
                <td>{circuit.id}</td>
                <td>{circuit.name}</td>
                <td>{circuit.location}</td>
                <td>{circuit.description}</td>
                <td>
                  <Link to={`/admin/circuit/edit/${circuit.id}`} style={{ marginRight: '10px' }}>
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(circuit.id)} style={{ color: 'red' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '20px' }}>
          <Link to="/admin/circuit/new">New</Link>
        </div>
      </div>
    </div>
  );
};

export default CircuitDetails;
