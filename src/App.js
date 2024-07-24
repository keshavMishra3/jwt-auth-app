import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


