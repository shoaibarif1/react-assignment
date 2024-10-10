import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import MyShifts from './components/MyShifts';
import AvailableShifts from './components/AvailableShifts';
import { ShiftsProvider } from './context/ShiftsContext';
import './styles.css'; // Make sure to style accordingly

const App = () => {
  return (
    <Router>
      <ShiftsProvider>
        <div className="app-container min-h-screen bg-gray-100">
          <nav className="bg-blue-500 p-4 shadow-lg">
            <ul className="flex justify-center space-x-10">
              <li>
                <NavLink
                  to="/my-shifts"
                  className="text-white text-lg font-semibold hover:text-blue-300 transition duration-200 ease-in-out"
                  activeClassName="active-link"
                  style={({ isActive }) => ({
                    color: isActive ? 'yellow' : 'white',
                  })}
                >
                  My Shifts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/available-shifts"
                  className="text-white text-lg font-semibold hover:text-blue-300 transition duration-200 ease-in-out"
                  activeClassName="active-link"
                  style={({ isActive }) => ({
                    color: isActive ? 'yellow' : 'white',
                  })}
                >
                  Available Shifts
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="content-container max-w-5xl mx-auto py-8 px-4 bg-white shadow-md rounded-lg mt-6">
            <Routes>
              <Route path="/my-shifts" element={<MyShifts />} />
              <Route path="/available-shifts" element={<AvailableShifts />} />
            </Routes>
          </div>
        </div>
      </ShiftsProvider>
    </Router>
  );
};

export default App;
