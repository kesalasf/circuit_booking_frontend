// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple landing page component.</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default HomePage;
