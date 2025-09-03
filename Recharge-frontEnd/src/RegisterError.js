import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import LoginRegisterHeader from "./LoginRegisterHeader";

export default function() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
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
            fill="#dc3545"
            className="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <h3 className="text-danger mb-3">Registration Failed</h3>
        <p className="text-muted mb-4">
          Something went wrong while creating your account. Please try again or check your details.
        </p>
        <button className="btn btn-outline-primary w-100" onClick={goToRegister}>
          Return to Registration
        </button>
      </div>
    </div>
    </>
  );
}