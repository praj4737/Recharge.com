import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function () {
  const navigate = useNavigate();

  return (
    <>
    <Header />
    <div className="container py-5">
      <div className="card text-center shadow-lg p-5">
        <h2 className="text-danger mb-4">❌ Payment Failed</h2>
        <p className="lead">Oops! Something went wrong while processing your payment. Please try again.</p>
        <hr className="my-4" />
        <button className="btn btn-secondary" onClick={() => navigate("/plans")}>
          Return to Home
        </button>
      </div>
    </div>
    </>
  );
}