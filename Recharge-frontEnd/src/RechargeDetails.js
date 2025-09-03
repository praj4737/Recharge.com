import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export default function RechargeDetails() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const currentPlan = user?.myPlans?.[0];
  const totalData = currentPlan?.plan?.totalData || 1;
  const remainingData = currentPlan?.remainingData || 0;
  const remainingPercent = (remainingData / totalData) * 100;

  const redirectPlans = () => {
    navigate('/plans');
  };

  const refreshUserData = () => {
    axios.post('http://localhost:8080/getUpdatedUser', {
      userId: user.userId
    })
    .then(response => {
      console.log(response.data.data);
      console.log(response.data.data.myPlans);
      console.log(response.data.data.payments);

      setUser(response.data.data);
      localStorage.setItem("user", JSON.stringify(user));
      
      
    })
    .catch(error => {
      console.error("Error refreshing user data:", error);
    });
  };

  return (
    <>
    <Header />
    <div className="container py-4">
      {/* User Info */}
      <div className="card border-primary mb-4">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <span>👤 User Info</span>
          <button onClick={refreshUserData} className="btn btn-outline-light btn-sm">
            🔄 Refresh
          </button>
        </div>
        <div className="card-body">
          <h5 className="card-title">{user?.fname} {user?.lname}</h5>
          <p className="card-text">Registered Mobile: {user?.contact?.registeredMobileNumber}</p>
        </div>
      </div>

      {/* Data Pack */}
      <div className="card border-info mb-4">
        <div className="card-header bg-info text-white">🚀 Data Pack</div>
        <div className="card-body">
          <h5 className="card-title">
            Remaining Data: {currentPlan?.remainingData ?? 0} GB / {currentPlan?.plan.dataAtHighSpeed} GB
          </h5>
          <div className="progress mb-2" style={{ height: '8px' }}>
            <div
              className="progress-bar bg-danger"
              style={{ width: `${(currentPlan?.remainingData / currentPlan?.plan?.dataAtHighSpeed) * 100 || 0}%` }}
            ></div>
          </div>
          <p className="text-end text-muted">Renews on: {"12:00 am"}</p>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary w-100">Check Usage</button>
            <button className="btn btn-outline-danger w-100" onClick={redirectPlans}>Add Data</button>
          </div>
        </div>
      </div>

      {/* Current Plan */}
      <div className="card border-danger mb-4">
        <div className="card-header bg-danger text-white">📦 Current Plan</div>
        <div className="card-body">
          <h5 className="card-title">₹{currentPlan?.plan?.price ?? '0.00'}</h5>
          <p>Plan Name: {currentPlan?.plan?.name ?? 'N/A'}</p>
          <p>Remaining SMS: {currentPlan?.remainingSms ?? '0'}</p>
          <p>Talktime Left: {currentPlan?.remainingTalktime ?? '0'} mins</p>
          <button className="btn btn-primary w-100" onClick={redirectPlans}>Recharge Again</button>
        </div>
      </div>

      {/* Usage History */}
      <div className="card border-info">
        <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
          <span>📈 Recharge History</span>
          <button className="btn btn-outline-light btn-sm">← Back</button>
        </div>
        <div className="card-body">
          {user?.payments?.length > 0 ? (
            user.payments.slice(0, 5).map((payment, index) => (
              <div key={index} className="border-bottom pb-2 mb-2">
                <p><strong>Plan Amount:</strong> ₹{payment.amount}</p>
                <p><strong>Payment Type:</strong> {payment.paymentType}</p>
                <p><strong>Date:</strong> {payment.paymentDate ?? 'N/A'}</p>
                <p><strong>Time:</strong> {payment.paymentTime ?? 'N/A'}</p>
              </div>
            ))
          ) : (
            <p className="text-muted">No usage history available.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}