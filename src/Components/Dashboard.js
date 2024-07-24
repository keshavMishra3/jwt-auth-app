import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:3001/api/auth/user', {
          headers: { 'x-auth-token': token }
        });
        setUser(res.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return user ? (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">Welcome, {user.name}</h4>
        </div>
        <div className="card-body">
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mt-5">
      <div className="alert alert-info" role="alert">
        Loading user data...
      </div>
    </div>
  );
};

export default Dashboard;


