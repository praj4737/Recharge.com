# Recharge and Data Add-on System

The Recharge and Data Add-on System is a Spring Boot Microservices-based application that allows users to recharge their mobile numbers and add data add-ons. It provides secure login, registration, recharge, payments, OTP verification, and notification services. The frontend is built in React with Bootstrap and custom CSS, while the backend is powered by Spring Boot microservices with MySQL as the database.

---

## Features

- User Management
  - Login
  - Registration
  - Profile management
  - OTP verification (via mail and SMS)

- Recharge and Payments
  - Recharge mobile numbers
  - View available plans
  - Recharge history
  - Mock Payment Gateway for transactions

- Notifications
  - Email notification after successful recharge
  - SMS notification after successful recharge
  - OTP sent via both Email and SMS

- General Pages
  - Homepage
  - About
  - Contact

---

## Technologies Used

### Backend
- Java 17
- Spring Boot 3.2.12
- Spring Microservices
  - Netflix Eureka Client
  - Netflix Eureka Server (Discovery Server)
  - API Gateway for routing
- Hibernate ORM with Validation
- MySQL Community Server 8.0
- Lombok (to reduce boilerplate code)
- Java Mail Sender (for sending emails)
- Twilio SMS API (for sending SMS)
- Maven (build tool)

### Frontend
- React (latest version)
- Bootstrap
- CSS
- Visual Studio Code (development environment)

### Tools
- IntelliJ IDEA Community Edition 2025.1.3 (backend development)
- MySQL Workbench (database management)
- Postman (API testing)

---

## Microservices

- login-service
- register-service
- recharge-service
- payments-service

All services are registered with Eureka Discovery Server and use API Gateway for routing.

---

## API Endpoints

- Authentication & User
  - `POST login` – Login
  - `POST register` – Register
  - `GET user` – Get user details
  - `GET updatedUser` – Get updated user details

- Recharge
  - `GET rechargeDetails` – Get recharge details
  - `GET plans` – Get available plans
  - `GET history` – Get recharge history
  - `GET otpVerification` – Verify OTP

- Payments
  - `POST payments` – Process payment

---

## Data Transfer

- Custom DTO Classes are used for responses to maintain clean and meaningful data transfer.
- Hibernate Validation is applied across entities for input consistency and integrity.

---

## Notifications Flow

- After successful recharge, both Email and SMS notifications are sent.
- OTP for verification is sent via both Email and SMS.

---

## Testing

- API Testing Performed using Postman (all endpoints are REST APIs).
- UI Testing Conducted on the React frontend to verify user flows and page interactions.

---

## Database

- MySQL Community Server 8.0
- MySQL Workbench used for schema design and queries.

---

## Build & Deployment

- Maven for backend build
- React build tools for frontend
- Services run via Eureka Discovery Server with API Gateway routing.

---
