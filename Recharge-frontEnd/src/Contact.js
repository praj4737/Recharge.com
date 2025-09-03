import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css';
import Header from "./Header";

const Contact = () => {
  return (
    <>
    <Header />
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold" style={{ color: "#ff6600" }}>
          Contact Us
        </h1>
        <p className="text-muted">
          We’re here to help you with all your recharge needs.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card shadow-lg p-4"
            style={{ borderRadius: "15px", border: "2px solid #ff6600" }}
          >
            <h4 className="fw-bold" style={{ color: "#ff6600" }}>
              Get in Touch
            </h4>
            <ul className="list-unstyled mt-3">
              <li className="mb-3">
                <i className="bi bi-envelope-fill" style={{ color: "#ff6600" }}></i>{" "}
                <span className="fw-semibold">Email:</span> support@recharge.com
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone-fill" style={{ color: "#ff6600" }}></i>{" "}
                <span className="fw-semibold">Phone:</span> +91 98765 43210
              </li>
              <li className="mb-3">
                <i className="bi bi-geo-alt-fill" style={{ color: "#ff6600" }}></i>{" "}
                <span className="fw-semibold">Address:</span> 123 Recharge Street,
                Tech City, India
              </li>
              <li className="mb-3">
                <i className="bi bi-clock-fill" style={{ color: "#ff6600" }}></i>{" "}
                <span className="fw-semibold">Working Hours:</span> Mon - Sat, 9:00
                AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div  className="text-center mt-5">
        <img id="image-div"
          src="https://img.freepik.com/vecteurs-premium/contactez-nous-illustration-du-service-client_2175-309.jpg"
          alt="Contact Support"
          className="img-fluid"
          style={{ maxWidth: "600px" }}  
        />
        <p className="mt-3 fw-semibold text-muted fs-5">
          Our support team is just a call or click away!
        </p>
      </div>
    </div>
    </>
  );
};

export default Contact;
