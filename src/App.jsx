import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import LoginPage from './Pages/login';
import SignupPage from './Pages/signup';

import './index.css';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Pages/privateroute';
import AdminLayout from './Pages/admin/admin';

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
        path="/admin/*"
              element={
                <PrivateRoute>
                  <AdminLayout/>
                </PrivateRoute>
              }
            />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

// https://viuyqowdcojuzxnsmeal.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdXlxb3dkY29qdXp4bnNtZWFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3NzgxMDQsImV4cCI6MjA2NDM1NDEwNH0.RuFpIAql2NHMrlcpXm2IxIIdBqE3Xfhi3sGYtqaGL9Y
