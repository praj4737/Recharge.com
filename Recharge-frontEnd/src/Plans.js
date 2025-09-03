import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Plans.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Plans() {
  const [plans, setPlans] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const redirect = (selectedPlan) => {
    const updatedUser = {
      ...user,
      myPlans: [selectedPlan]
    };
    navigate('/payments', { state: { user: updatedUser } });
  };

  useEffect(() => {
    axios.get("http://localhost:8080/rechargePlans")
      .then(response => {
        setPlans(response.data.data || []);
        console.log(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching plans:", error);
      });
  }, []);

  const tabLabels = [
    "Recharge Packs",
    "Data Add-Ons",
    "Network Type",
    "Special Offers",
    "Talktime Only",
    "Data Only",
    "Suggested Packs",
  ];

  const filteredPlans = plans.filter(plan => {
    switch (activeTab) {
      case 0: return plan.type === "Prepaid";
      case 1: return plan.type === "Addon";
      case 3: return plan.type === "Special";
      case 4: return plan.type === "Talktime";
      case 6: return plan.type === "Suggested";
      default: return true;
    }
  });

  const planUI = filteredPlans.map((plan, i) => (
    <div key={i} className="card border-0 shadow-sm mb-4 bg-light">
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <span className="fw-bold">{plan.price} Rs.</span>
        <span>{plan.validity} Days</span>
      </div>
      <div className="card-body">
        <ul className="list-unstyled mb-3">
          <li>Type: <strong>{plan.type}</strong></li>
          <li>Data: <strong>{plan.dataAtHighSpeed}GB/Day</strong></li>
          <li>Talktime: <strong>{plan.voice}</strong></li>
          <li>SMS: <strong>{plan.sms}/Day</strong></li>
          <li>Network: <strong>{plan.generationType}G</strong></li>
          <li>Total Data: <strong>{plan.totalData} GB</strong></li>
        </ul>
        <div className="text-end">
          <button className="btn btn-danger" onClick={() => redirect(plan)}>Buy Now</button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Header user={user} />
      <div className="container py-4">
        <h3 className="text-center text-primary mb-4">Recharge Packs</h3>
        <ul className="nav nav-tabs justify-content-center mb-4" role="tablist">
          {tabLabels.map((label, idx) => (
            <li className="nav-item" role="presentation" key={idx}>
              <button
                className={`nav-link ${idx === activeTab ? "active" : ""}`}
                data-bs-toggle="tab"
                type="button"
                role="tab"
                onClick={() => setActiveTab(idx)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" role="tabpanel">
            {planUI.length > 0 ? planUI : <p className="text-center text-muted">No plans available for this category.</p>}
          </div>
        </div>
      </div>
    </>
  );
}