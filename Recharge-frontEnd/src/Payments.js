import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Payments.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

export default function () {
  const [method, setMethod] = useState("");
  const [processing, setProcessing] = useState(false);

  const [paymentType, setPaymentType] = useState();
  const location = useLocation();
  const user = location.state.user;
  const userPlans = location.state.userPlans; 
  const selectedPlan = user?.myPlans?.[0]; 
  const navigate = useNavigate();
  console.log(user);
  console.log(selectedPlan);

  const savePayment = () => {
    document.getElementById("spinner-div").style.visibility = "visible";
    document.getElementById("payNow-btn").style.visibility = "hidden";
  axios.post(
    'http://localhost:8080/payments',
    {
      user: user,
      paymentType: method,
      amount: user.myPlans[0].price,
      plans: selectedPlan
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  )
  .then(function (response) {
    if (response.data.code === 200) {
      navigate('/paymentSucess' , {state: user});
    } else {
      navigate('/paymentFailed');
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};

  return (
    <>
    <Header />
    <div className="container py-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center text-primary mb-4">Choose Payment Method</h2>

        {/* Sample Flex Layout */}
        <div id="spinner-div" className="d-flex flex-row bd-highlight mb-3">
          <div className="p-2 bd-highlight">
            <div className="d-flex flex-row bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="p-2 bd-highlight">Processing your Payment Pls wait..</div>
              <div className="p-2 bd-highlight">Do not Go Back...</div>
              
            </div>
          </div>
          
        </div>

        {/* Method Selection */}
        <div className="mb-4">
          <label className="form-label">Select Payment Option</label>
          <select
            className="form-select"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="">-- Choose --</option>
            <option value="upi">UPI</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="netbanking">Net Banking</option>
            <option value="wallet">Wallet</option>
          </select>
        </div>

        {/* Dynamic Form Fields */}
        {method === "upi" && (
          <div className="mb-3">
            <label className="form-label">Enter UPI ID</label>
            <input type="text" className="form-control" placeholder="e.g. yourname@upi" />
          </div>
        )}

        {(method === "credit" || method === "debit") && (
          <>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Expiry Date</label>
                <input type="text" className="form-control" placeholder="MM/YY" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">CVV</label>
                <input type="password" className="form-control" placeholder="CVV" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Cardholder Name</label>
              <input type="text" className="form-control" placeholder="Name on Card" />
            </div>
          </>
        )}

        {method === "netbanking" && (
          <div className="mb-3">
            <label className="form-label">Select Bank</label>
            <select className="form-select">
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
              <option>Axis Bank</option>
              <option>Other</option>
            </select>
          </div>
        )}

        {method === "wallet" && (
          <div className="mb-3">
            <label className="form-label">Choose Wallet</label>
            <select className="form-select">
              <option>Paytm</option>
              <option>PhonePe</option>
              <option>Amazon Pay</option>
              <option>Mobikwik</option>
            </select>
          </div>
        )}

        {/* Action Buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button id="payNow-btn" onClick={savePayment} className="btn btn-success" disabled={processing}>
            {processing ? "Processing..." : "Pay Now"}
          </button>
          <button className="btn btn-outline-secondary" onClick={() => window.history.back()}>
            Cancel
          </button>
        </div>

        {/* Payment Icons */}
        <hr className="my-4" />
        <div className="d-flex justify-content-around flex-wrap gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png"
            alt="UPI"
            style={{ maxWidth: "80px" }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Razorpay_logo.webp/250px-Razorpay_logo.webp.png"
            alt="Razorpay"
            style={{ maxWidth: "80px" }}
          />
          <img
            src="https://i.pinimg.com/1200x/db/42/53/db4253052cfc0f80ac281486c19f9d57.jpg"
            alt="PhonePe"
            style={{ maxWidth: "80px" }}
          />
          <img
            src="https://telecomtalk.info/wp-content/uploads/2022/12/gpay-how-to-create-or-find-upi.jpg"
            alt="Google Pay"
            style={{ maxWidth: "80px" }}
          />
        </div>
      </div>
    </div>
    </>
  );
}