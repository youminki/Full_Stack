import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const nav = useNavigate();

  useEffect(() => {
    logout();
    nav('/home');
  }, [logout, nav]);

  return <div style={{ padding: 24 }}>Logging out...</div>;
};

export default Logout;
