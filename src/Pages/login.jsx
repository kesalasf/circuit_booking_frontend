import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { loginUser } from '../api/userApi'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const data =await loginUser({ username: username, password: password });

      if (data.success) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));


        if (data.user.role === 'admin') {
          navigate('/admin');
        } else {
          toast.error('Access denied: You are not an admin');
          //setErrorMsg('Access denied: You are not an admin');
          navigate('/login');
        }
      } else {
        setErrorMsg(data.message || 'Login failed');
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMsg('Invalid username or password');
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {errorMsg && (
          <div className="mb-4 text-red-600 text-center">{errorMsg}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
