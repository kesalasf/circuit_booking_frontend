import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoomDetails = ({ id }) => {
  const [rooms, setRooms] = useState([]);

  const getAuthHeaders = () => {
  const token = localStorage.getItem("authToken"); // or sessionStorage
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


  useEffect(() => {
    axios.get(`http://localhost:3000/room/details/${id}` , getAuthHeaders() )
      .then(response => setRooms(response.data))
      .catch(error => console.error('Error fetching rooms:', error));
  }, [id]);

  return (
    <div>
      <h2>Room Details for Circuit #{id}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Price</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.room_type}</td>
              <td>{room.price}</td>
              <td>{room.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomDetails;
