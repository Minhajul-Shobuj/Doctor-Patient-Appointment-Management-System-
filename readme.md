# 🩺 Doctor–Patient Appointment Management API

A full-featured backend REST API for managing doctor registrations, patient appointments, services, and availability. Built using **Node.js**, **TypeScript**, **MongoDB**, **Express**, and **Zod** for validation.

---

## 🚀 Features

### 👨‍⚕️ Doctor Module

- Register/Login (JWT Auth)
- Add/Edit/Delete Services
- Set Service-based Availability
- View and Manage Appointments (Accept/Cancel)

### 👤 Patient Module

- Register/Login
- View Doctors, Services, and Available Slots
- Book Appointment
- View Appointment History & Status

### 🔐 Authentication

- Secure login with JWT
- Role-based access control
- Passwords hashed with bcrypt

### 🔁 Appointment Workflow

- Patient books → status: `pending`
- Doctor accepts/rejects
- Accepted = slot becomes unavailable
- Cancelled = slot becomes free
- Real-time status update for patients

---

## 📦 Tech Stack

| Tech       | Description       |
| ---------- | ----------------- |
| Node.js    | Backend runtime   |
| Express.js | Web framework     |
| TypeScript | Typed JavaScript  |
| MongoDB    | NoSQL database    |
| Mongoose   | ODM for MongoDB   |
| Zod        | Schema validation |
| bcryptjs   | Password hashing  |
| JWT        | Token-based auth  |

---

## 📁 Folder Structure

src/
│
├── modules/
│ ├── auth/
│ ├── doctor/
│ ├── patient/
│ ├── appointment/
│ ├── service/
│ └── availability/
│
├── utils/
├── middlewares/
├── config/
└── app.ts
└── server.ts

---

## 🛠 Setup & Run Locally

```bash
# 1. Clone the project
git clone https://github.com/Minhajul-Shobuj/Doctor-Patient-Appointment-Management-System-

# 2. Navigate into project
cd doctor-appointment-api

# 3. Install dependencies
npm install

# 4. Create `.env` file
cp .env.example .env
# Add Mongo URI, JWT secret, etc.

# 5. Start the server
npm run dev

📮 API Endpoints
Auth
POST /auth/register-doctor

POST /auth/register-patient

POST /auth/login

Doctor
POST /doctor/services

PATCH /doctor/services/:id

DELETE /doctor/services/:id

POST /doctor/availability

GET /doctor/appointments?status=pending

PATCH /doctor/appointments/:id/status

Patient
GET /doctors

GET /doctors/:id

POST /appointments

GET /patient/appointments
```
