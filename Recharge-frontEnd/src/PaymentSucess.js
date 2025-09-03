import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/home");
  };

  return (
    <>
    <Header />
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg border-0 p-5 text-center" style={{ maxWidth: "500px" }}>
        <div className="mb-4">
          <span className="display-4 text-success">✅</span>
        </div>
        <h2 className="fw-bold text-dark mb-3">Payment Successful</h2>
        <p className="lead text-muted mb-4">
          Thank you for your payment. Your recharge has been processed successfully.
        </p>
        <hr className="my-4" />
        <button 
          className="btn btn-warning text-white fw-semibold px-4" 
          onClick={handleReturnHome}
        >
          Return to Home
        </button>
      </div>
    </div>
    </>
  );
}
