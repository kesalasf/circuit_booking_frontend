
import './App.css'
import SampleComponent from './Component/SampleComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/homepage'
import LoginPage from './Pages/login'
import NotFoundPage from './Pages/NotFoundPage';


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
