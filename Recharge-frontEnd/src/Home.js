import Header from './Header';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("User ID:", parsedUser.userId);
      } catch (err) {
        console.error("Error parsing user from localStorage:", err);
      }
    } else {
      console.warn("No user found in localStorage");
    }
  }, []);

  const redirect = () => {
    navigate('/plans');
  };

  const redirectRechargePage = () => {
    navigate('/rechargeDetails');
  };

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h4 className="loading-text">Loading user data...</h4>
      </div>
    );
  }

  const currentPlan = user?.myPlans?.[0];

  return (
    <>
      <Header />
      <div className="home-container">
        {/* Carousel */}
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img height={500} src="https://biznext.in/blog/wp-content/uploads/2024/07/Best-App-for-Mobile-Recharge.webp" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img height={500} src="https://a1topup.com/blog/images/blog/mobile-recharge-app.png" className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img height={500} src="https://rcpanel.com/assets/uploads/media-uploader/multi-recharge-software-31720423227.png" className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div><br />

        {/* Info Section */}
        <section className="info-section">
          <div className="section-header">
            <h2>📊 My Data & Recharge Info</h2>
            <button onClick={redirectRechargePage} className='retro-btn'>View more</button>
          </div>
          <div className="info-card">
            <p><strong>Data Left:</strong> {currentPlan?.remainingData ?? '0'} GB</p>
            <p><strong>Plan Name:</strong> {currentPlan?.plan?.name ?? 'no plans'}</p>
            <p><strong>SMS left:</strong> {currentPlan?.remainingSms ?? '0'}</p>
            <p><strong>Calls left:</strong> {currentPlan?.remainingTalktime ?? '0'} minutes</p>
          </div>
        </section>

        {/* Plans Section */}
        <section className="plans-section">
          <div className="section-header">
            <h2>💳 Recharge Plans</h2>
            <button className='retro-btn' onClick={redirect}>View more</button>
          </div>
          <div className="plans-grid">
            <div className="plan-card"><h3>₹199</h3><p>1.5GB/day • 28 days</p></div>
            <div className="plan-card"><h3>₹399</h3><p>2GB/day • 56 days</p></div>
            <div className="plan-card"><h3>₹599</h3><p>3GB/day • 84 days</p></div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="section-header">
            <h2>🧰 Other Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">Bill Payments</div>
            <div className="service-card">Data Booster</div>
            <div className="service-card">Caller Tunes</div>
            <div className="service-card">International Roaming</div>
          </div>
        </section>

        {/* Settings Section */}
        <section className="settings-section">
          <div className="section-header">
            <h2>⚙️ Settings</h2>
            <button className='retro-btn'>View more</button>
          </div>
          <div className="settings-card">
            <p>🔔 Notifications: Enabled</p>
            <p>🌐 Language: English</p>
            <p>🔒 Privacy: Standard</p>
          </div>
        </section>
      </div>
    </>
  );
}
