import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginRegisterHeader from "./LoginRegisterHeader";

export default function OtpVerify() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const readOtp = (e) => {
    setOtp(e.target.value);
  };

  const verify = () => {
    axios.post('http://localhost:8080/verifyOtp', { otp })
      .then(response => {
        console.log(response.data);
        if (response.data === "USER_SAVED_SUCCESSFULLY") {
          navigate('/registerSucess');
        } else {
          navigate('/registerError');
        }
      })
      .catch(error => console.error(error));
  };

  // Styles
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'linear-gradient(135deg, #e3f2fd, #0d6efd, #114edd)',
    backgroundSize: '400% 400%',
    animation: 'bluePulse 12s ease infinite'
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '500px',
    padding: '3rem',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '16px',
    boxShadow: '0 0 60px rgba(13, 110, 253, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  };

  const haloStyle = {
    position: 'absolute',
    top: '-12px',
    left: '-12px',
    right: '-12px',
    bottom: '-12px',
    borderRadius: '20px',
    boxShadow: '0 0 80px rgba(13, 110, 253, 0.4)',
    zIndex: -1
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ced4da',
    marginBottom: '1.5rem',
    color: '#114edd'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  return (
    <>
      <style>
        {`
          @keyframes bluePulse {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <>
      <LoginRegisterHeader />
      <div style={pageStyle}>
        <div style={containerStyle}>
          <div style={haloStyle}></div>
          <h2 style={{ color: '#0d6efd', marginBottom: '2rem' }}>🔐 OTP Verification</h2>
          <form>
            <input
              type="text"
              placeholder="Enter the 4-digit OTP"
              value={otp}
              onChange={readOtp}
              style={inputStyle}
              maxLength={4}
            />
            <button type="button" onClick={verify} style={buttonStyle}>
              Verify OTP
            </button>
          </form>
        </div>
      </div>
      </>
    </>
  );
}