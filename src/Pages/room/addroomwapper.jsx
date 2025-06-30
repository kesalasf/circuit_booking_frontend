import React from 'react';
import { useParams } from 'react-router-dom';
import RoomDetails from './addroom';


const AddRoomWrapper = () => {
  const { id } = useParams(); 
  return < RoomDetails id={id} />;
};

export default AddRoomWrapper;
