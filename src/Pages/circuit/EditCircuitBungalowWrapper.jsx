import React from 'react';
import { useParams } from 'react-router-dom';
import EditCircuitBungalow from './editCircuitid';

const EditCircuitBungalowWrapper = () => {
  const { id } = useParams(); 
  return <EditCircuitBungalow id={id} />; 
};

export default EditCircuitBungalowWrapper;
