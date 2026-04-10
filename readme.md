# Task Manager

A full-stack Task Manager built with React (Vite) and Node.js (Express), designed to fulfill the technical assessment requirements.

## 🚀 Features

**Core functionality:**
* View, add, delete, and toggle completion status of tasks.
* Graceful handling of loading and error states.
* Clean RESTful API with data validation.

**Bonus enhancements implemented:**
* **Filter Tasks:** Filter by All, Active, or Completed status.
* **Inline Editing:** Edit existing task titles directly in the UI.
* **Data Persistence:** Tasks persist across page refreshes via local file storage.
* **Automated Testing:** Backend API endpoints are tested using Jest and Supertest.

## 🛠️ Tech Stack
* **Frontend:** React, Vite, Standard CSS (with CSS variables for theming)
* **Backend:** Node.js, Express
* **Testing:** Jest, Supertest

## 📦 Setup and Run Instructions

This project requires Node.js to be installed. You will need two terminal windows to run the backend and frontend concurrently.

### 1. Start the Backend API
Open a terminal, navigate to the `backend` directory, install dependencies, and start the server:
```bash
cd backend
npm install
node server.js
