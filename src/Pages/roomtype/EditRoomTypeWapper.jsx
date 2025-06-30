import React from 'react';
import { useParams } from 'react-router-dom';
import EditRoomType from './editRoomtype';


const EditRoomTypeWrapper = () => {
  const { id } = useParams(); 
  return <EditRoomType id={id} />; 
};

export default EditRoomTypeWrapper;
