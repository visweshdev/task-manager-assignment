# Task Manager

A lightweight Task Manager built with React (Vite) and Node.js (Express), designed to fulfill the core requirements of the technical assessment.

## Setup and Run Instructions

This project requires Node.js installed on your machine. You will need two terminal windows to run the backend and frontend concurrently.

### 1. Start the Backend
Navigate to the `backend` directory, install dependencies, and start the server:
\`\`\`bash
cd backend
npm install
node server.js
\`\`\`
The backend will run on `http://localhost:3001`.

### 2. Start the Frontend
In a new terminal window, navigate to the `frontend` directory, install dependencies, and start the Vite development server:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
The frontend will typically run on `http://localhost:5173`. Open this link in your browser.

### 3. Run Tests (Bonus)
Navigate to the `backend` directory and run the test suite:
\`\`\`bash
npm test
\`\`\`

## Assumptions & Trade-offs

* **Storage & Bonuses Completed:** I completed all optional bonuses. Tasks are filtered by state, titles are editable, and tests are implemented via Jest. To fulfill the "Persist tasks after refresh" requirement while maintaining a lightweight environment, the Node server uses the native `fs` module to save tasks to a local `tasks.json` file rather than spinning up a heavy database instance.
* **Architecture:** All core frontend logic is contained within `App.jsx` to maintain a clean and easily reviewable structure for a project of this small scope, avoiding unnecessary file fragmentation.
* **Styling:** I used standard CSS over utility frameworks (like Tailwind) to ensure the code is instantly readable without requiring additional compilation steps or mental parsing of utility classes. CSS Variables were utilized for consistent theming.
