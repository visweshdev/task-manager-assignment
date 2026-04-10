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
```

The backend will run on http://localhost:3001.

### 2. Start the Frontend Application
Open a new terminal window, navigate to the frontend directory, install dependencies, and start the Vite development server:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on http://localhost:5173. Open this link in your browser.

### 3. Run Automated Tests
To run the backend test suite, navigate to the backend directory and execute:

```bash
cd backend
npm test
```

## 🧠 Assumptions & Trade-offs
To deliver a complete, well-structured solution within the expected 1-2 hour timeframe, the following architectural decisions were made:

**Storage Strategy:** To fulfill the "persist tasks after refresh" requirement while maintaining a lightweight environment, the Node server uses the native fs module to save tasks to a local tasks.json file. This avoids the overhead of spinning up a full database instance for a small-scope exercise.

**Styling Approach:** Standard CSS with CSS variables was utilized over a utility framework like Tailwind. For a small application, this ensures the code is instantly readable without requiring the reviewer to mentally parse utility classes or require additional compilation steps.

**Architecture & State:** All core frontend logic and state management are contained within App.jsx. For a project of this size, keeping the logic centralized maintains a clean, easily reviewable structure and avoids unnecessary component fragmentation.

**Scope Control (Docker):** While I successfully implemented the other bonus requirements (filtering, editing, persistence, and testing), I opted to skip the Docker containerization setup. This was a conscious trade-off to ensure the core logic and other features were highly polished while strictly adhering to the 1-2 hour time expectation.