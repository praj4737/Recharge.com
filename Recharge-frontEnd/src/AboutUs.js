import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

const About = () => {
  return (
    <>
    <Header />
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#ff6600" }}>
          About Us
        </h1>
        <p className="text-muted fs-5">
          Learn more about who we are, what we do, and the services we provide.
        </p>
      </div>

      {/* Who We Are */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Who We Are"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold" style={{ color: "#ff6600" }}>
            Who We Are
          </h3>
          <p className="text-muted fs-5">
            We are a customer-focused recharge and data solutions provider,
            dedicated to making online recharges quick, secure, and seamless.
            Our mission is to simplify digital payments and ensure that our
            users stay connected at all times without any hassle.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-md-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4359/4359963.png"
            alt="What We Do"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>
        <div className="col-md-6">
          <h3 className="fw-bold" style={{ color: "#ff6600" }}>
            What We Do
          </h3>
          <p className="text-muted fs-5">
            We provide a seamless platform for all your mobile recharge and data
            add-on needs. From instant recharges to affordable data packs, our
            platform is designed to offer you the best value and convenience.
          </p>
        </div>
      </div>

      {/* Our Services */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#ff6600" }}>
          Our Services
        </h3>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div
              className="card shadow-lg p-4 h-100"
              style={{ borderRadius: "15px", border: "2px solid #ff6600" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3514/3514426.png"
                alt="Recharge Service"
                className="img-fluid mb-3"
                style={{ maxWidth: "100px" }}
              />
              <h5 className="fw-bold" style={{ color: "#ff6600" }}>
                Mobile Recharge
              </h5>
              <p className="text-muted">
                Fast, secure, and reliable mobile recharges at your fingertips.
                Stay connected anytime, anywhere with our instant recharge
                solutions.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div
              className="card shadow-lg p-4 h-100"
              style={{ borderRadius: "15px", border: "2px solid #ff6600" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4121/4121054.png"
                alt="Data Add-On"
                className="img-fluid mb-3"
                style={{ maxWidth: "100px" }}
              />
              <h5 className="fw-bold" style={{ color: "#ff6600" }}>
                Data Add-Ons
              </h5>
              <p className="text-muted">
                Affordable data packs to keep you surfing, streaming, and
                connecting with ease. Flexible options tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="mb-5">
        <h3 className="fw-bold text-center mb-4" style={{ color: "#ff6600" }}>
          Meet Our Team
        </h3>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1999/1999625.png"
                alt="Team Member"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px" }}
              />
              <h5 className="fw-bold">Bhola Ram Toofani</h5>
              <p className="text-muted">Founder and Ceo</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="Team Member"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px" }}
              />
              <h5 className="fw-bold">Deepak Hooda</h5>
              <p className="text-muted">Head of Operations</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow p-4 h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/236/236831.png"
                alt="Team Member"
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px" }}
              />
              <h5 className="fw-bold">Ravi Teja</h5>
              <p className="text-muted">Tech Lead</p>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="text-center mt-5">
        <img
          src="https://static.vecteezy.com/system/resources/previews/007/931/694/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg"
          alt="About Us"
          className="img-fluid"
          style={{ maxWidth: "600px" }}
        />
        <p className="mt-3 fw-semibold text-muted fs-5">
          Together, we aim to make digital payments easier, faster, and safer for everyone.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;
