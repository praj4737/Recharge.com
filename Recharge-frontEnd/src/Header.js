import './Header.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaBell,
  FaCog,
  FaUser,
  FaSignOutAlt,
  FaHistory,
  FaUserCircle,
  FaHome,
  FaPhone,
  FaInfoCircle

  

} from 'react-icons/fa';


export default function Header(props) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const size = 30;

  const navigate = useNavigate();
  const redirect = ()=>{
    navigate('/profile');
  }

  const logoutUser = ()=>{
    localStorage.removeItem("user");
    navigate('/login');
  }



  return (
   <nav id='header' class="navbar border navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a className="navbar-brand text-primary fw-bold" href="#" style={{ fontSize: '1.8rem' }}>
    <span style={{ color: '#0d6efd' }}>Recharge</span>
    <span style={{ color: '#dc3545' }}>.com</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home"><FaHome size={size}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login"><FaSignOutAlt size={size}/></a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FaUserCircle size={size}/>
          </a>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item btn btn-primary" onClick={redirect}>{user.lname}</button></li>
            <li><button class="dropdown-item" onClick={logoutUser}>Logout</button></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="/contact">Help</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact"><FaPhone size={size}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutUs"><FaInfoCircle size={size}/></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}
