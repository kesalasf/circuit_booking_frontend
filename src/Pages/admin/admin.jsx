import React from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import CircuitDetails from '../circuit/circuitDetails';
import AddCircuitBungalow from '../circuit/addCircuit';
import EditCircuitBungalowWrapper from '../circuit/EditCircuitBungalowWrapper';
import RoomTypeDetails from '../roomtype/roomTypeDetails';
import AddRoomType from '../roomtype/addRoomtype';
import EditRoomType from '../roomtype/editRoomtype';
import EditRoomTypeWrapper from '../roomtype/EditRoomTypeWapper';
import AddRoomWrapper from '../room/addroomwapper';
import CircuitList from '../circuit/circuitlist';


const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/admin/users" className="hover:text-blue-400">User Management</Link>
          <Link to="/admin/bookings" className="hover:text-green-400">Bookings</Link>
          <Link to="/admin/reports" className="hover:text-yellow-400">Reports</Link>
          <Link to="/admin/settings" className="hover:text-red-400">Settings</Link>
          <Link to="/admin/circuit" className="hover:text-red-400">Circuit</Link>
          <Link to="/admin/file" className="hover:text-red-400">file</Link>
          <Link to="/admin/file2" className="hover:text-red-400">file2</Link>
          <Link to="/admin/roomtype" className="hover:text-red-400">Room Type</Link>
          <Link to="/admin/room/new/" className="hover:text-red-400">Room </Link>
         <Link to="/admin/circuit/list/" className="hover:text-red-400">circut list </Link>
        
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-8 bg-red-500">
      <Routes path="/*">
      <Route path="/bookings" element={ <h1>hi kesala</h1>} />
      <Route path="/reports" element={ <h1>hi kesala</h1>} />
      <Route path="/settings" element={ <h1>hi kesala</h1>} />
      <Route path="/circuit" element={<CircuitDetails/>} />
      <Route path="/circuit/new" element={<AddCircuitBungalow/>} />
      <Route path="/file2" element={<h1> hhhhhhhh</h1>} />
      <Route path="/circuit/edit/:id" element={<EditCircuitBungalowWrapper/>} />
      <Route path="/roomtype/edit/:id" element={<EditRoomTypeWrapper/>} />
      <Route path="/roomtype" element={<RoomTypeDetails/>}/> 
      <Route path="/circuit/list" element={<CircuitList/>} /> 
      <Route path="/rooms/:id" element={<AddRoomWrapper />} />
      </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
