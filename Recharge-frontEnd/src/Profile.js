import Header from './Header';
import { useLocation, useNavigate } from 'react-router-dom';
import './Profile.css';

export default function() {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const redirect = ()=>{
    navigate('/rechargeDetails');
  }
  
  const renderField = (label, value) => (
    <div className="mb-3">
      <label className="form-label text-muted fw-semibold">{label}</label>
      <input type="text" className="form-control" value={value} readOnly />
    </div>
  );

  return (
    <>
      <Header />
      <div className="profile-container py-4">
        
        {/* Header */}
        <div className="card profile-card p-3 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <i className="fas fa-user-circle fa-2x text-primary"></i>
              <h4 className="mb-0 fw-bold text-dark">Profile Manager</h4>
            </div>
            <div className="d-flex gap-2">
              <a href='/home' className="btn btn-outline-primary rounded-pill" title="Home">
                <i className="fas fa-home"></i>
              </a>
              <button className="btn btn-outline-dark rounded-pill" title="Toggle Dark Mode">
                <i className="fas fa-moon"></i>
              </button>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="card profile-card p-4 mb-4">
          <div className="section-header">
            <h5 className="fw-semibold text-primary">👤 User Information</h5>
            <button className="btn btn-danger rounded-pill px-4">Edit Profile</button>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">{renderField("First Name", user.fname)}</div>
            <div className="col-md-6">{renderField("Last Name", user.lname)}</div>
            <div className="col-md-6">{renderField("Date of Birth", user.dob)}</div>
            <div className="col-md-6">{renderField("Mobile Number", user.contact.registeredMobileNumber)}</div>
            <div className="col-md-6">{renderField("Email", user.contact.email)}</div>
          </div>
        </div>

        {/* Address Information */}
        <div className="card profile-card p-4 mb-4">
          <h5 className="fw-semibold text-primary">📍 Address Information</h5>
          <div className="row mt-3">
            <div className="col-md-6">{renderField("Address Line 1", user.address.addressLine1)}</div>
            <div className="col-md-6">{renderField("Address Line 2", user.address.addressLine2)}</div>
            <div className="col-md-4">{renderField("City", user.address.city)}</div>
            <div className="col-md-4">{renderField("State", user.address.state)}</div>
            <div className="col-md-4">{renderField("Pincode", user.address.pincode)}</div>
            <div className="col-md-6">{renderField("Country", user.address.country)}</div>
          </div>
        </div>

        {/* Account Details */}
        <div className="card profile-card p-4 mb-4">
          <h5 className="fw-semibold text-primary">📦 Account Details</h5>
          <div className="row mt-3">
            <div className="col-md-6">{renderField("Plan Name", user?.myPlans[0]?.plan?.name ?? 'no plans')}</div>
            <div className="col-md-6">{renderField("Plan Price", `₹${user?.myPlans[0]?.plan?.price ?? '0'}`)}</div>
            <div className="col-md-6">{renderField("Validity", `${user?.myPlans[0]?.plan?.validity ?? 'no validity'} Days`)}</div>
            <div className="col-md-6">{renderField("Data/Day", `${user?.myPlans[0]?.plan?.dataAtHighSpeed ?? '0'} GB`)}</div>
            <div className="col-md-12">{renderField("Benefits", user?.myPlans[0]?.plan?.description ?? 'no desc.')}</div>
            <div className="col-md-6">{renderField("Account Type", "Prepaid")}</div>
            <div className="col-md-6">{renderField("SIM Status", "Active")}</div>
          </div>
          <button onClick={redirect} className='btn btn-danger rounded-pill px-4'>More Details</button>
        </div>

        {/* Settings */}
        <div className="card profile-card p-4 mb-4">
          <h5 className="fw-semibold text-primary">⚙️ Settings & Preferences</h5>
          <div className="row mt-3">
            <div className="col-md-6">{renderField("Language Preference", "English")}</div>
            <div className="col-md-6">{renderField("Notification Preferences", "Enabled")}</div>
          </div>
        </div>
      </div>
    </>
  );
}
