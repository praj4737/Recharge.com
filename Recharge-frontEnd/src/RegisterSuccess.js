import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import LoginRegisterHeader from "./LoginRegisterHeader";

export default function() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
    <LoginRegisterHeader />
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-5 text-center" style={{ maxWidth: "500px" }}>
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="#007bff"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.992a.75.75 0 1 0-1.06-1.06L7.5 9.439 5.53 7.47a.75.75 0 0 0-1.06 1.06l2.5 2.5z" />
          </svg>
        </div>
        <h3 className="text-success mb-3">Registration Successful!</h3>
        <p className="text-muted mb-4">
          Your account has been created successfully. You can now log in using your credentials.
        </p>
        <button className="btn btn-primary w-100" onClick={goToLogin}>
          Go to Login
        </button>
      </div>
    </div>
    </>
  );
}