import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';
import LoginRegisterHeader from "./LoginRegisterHeader";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dob, setDob] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [mobile, setMobile] = useState('');
  const [altMobile, setAltMobile] = useState('');

  const register = () => {
    axios.post('http://localhost:8080/register', {
      fname, lname, dob, status: true, startDate: "2025-08-28",
      address: { addressLine1: address1, addressLine2: address2, addressLine3: address3, pincode, city: "", state, country },
      contact: { email, registeredMobileNumber: mobile, alternateMobileNumber: altMobile },
      creds: { password }
    }).then(res => {
      console.log(res);
      navigate('/otp');
    }).catch(err => console.log(err));
  };

  return (
    <>
      <LoginRegisterHeader />
      <div className="container mt-5 p-4 bg-white rounded shadow border border-primary">
        <h2 className="text-center text-primary mb-4">User Registration</h2>
        <form className="row g-3">
          {/* Name & DOB */}
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="First Name" value={fname} onChange={e => setFname(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Last Name" value={lname} onChange={e => setLname(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <input type="date" className="form-control" value={dob} onChange={e => setDob(e.target.value)} required />
          </div>

          {/* Address Lines */}
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Address Line 1" value={address1} onChange={e => setAddress1(e.target.value)} required />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Address Line 2" value={address2} onChange={e => setAddress2(e.target.value)} />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Address Line 3" value={address3} onChange={e => setAddress3(e.target.value)} required />
          </div>

          {/* Location */}
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="State" value={state} onChange={e => setState(e.target.value)} />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="PIN Code" value={pincode} onChange={e => setPincode(e.target.value)} required />
          </div>

          {/* Contact */}
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <input type="tel" className="form-control" placeholder="Registered Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required />
          </div>
          <div className="col-md-3">
            <input type="tel" className="form-control" placeholder="Alternate Mobile" value={altMobile} onChange={e => setAltMobile(e.target.value)} />
          </div>

          {/* Passwords */}
          <div className="col-md-6">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="col-md-6">
            <input type="password" className="form-control" placeholder="Confirm Password" required />
          </div>

          {/* Submit */}
          <div className="col-12 text-center mt-3">
            <button type="button" className="btn btn-danger px-5" onClick={register}>Next</button>
          </div>
        </form>
      </div>
    </>
  );
}