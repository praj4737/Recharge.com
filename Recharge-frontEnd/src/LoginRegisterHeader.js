import './Header.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function() {
  const navigate = useNavigate();

  return (
    <nav id="header" className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <a className="navbar-brand text-primary fw-bold" href="#" style={{ fontSize: '1.8rem' }}>
          <span style={{ color: '#0d6efd' }}>Recharge</span>
          <span style={{ color: '#dc3545' }}>.com</span>
        </a>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button
            className="btn btn-danger btn btn-danger rounded-pill px-4"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="btn btn-primary btn btn-primary rounded-pill px-4"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}