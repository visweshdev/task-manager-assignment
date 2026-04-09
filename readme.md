# Task Manager

[cite_start]A lightweight Task Manager application built with React (Vite) and Node.js (Express)[cite: 29, 30]. [cite_start]Designed to fulfill the core requirements of the technical assessment while maintaining a clean, easily reviewable codebase[cite: 5].

## Features
* [cite_start]**Core Functionality:** Create, view, update (mark complete), and delete tasks[cite: 12, 13, 14, 15].
* [cite_start]**Bonus - Filtering:** Filter tasks by 'All', 'Active', or 'Completed' status[cite: 38].
* [cite_start]**Bonus - Inline Editing:** Edit existing task titles directly in the UI[cite: 39].
* [cite_start]**Bonus - Persistence:** Tasks are saved to a local JSON file to persist across server restarts[cite: 40].
* [cite_start]**Bonus - Testing:** Backend includes a basic Jest test suite for API endpoints[cite: 41].

## Setup and Run Instructions

*Prerequisites: Ensure you have Node.js installed on your machine.*

You will need two terminal windows to run the backend and frontend concurrently.

### 1. Start the Backend API
Navigate to the `backend` directory, install dependencies, and start the server:
\`\`\`bash
cd backend
npm install
npm start
\`\`\`
*The backend API will run on `http://localhost:3001`.*

### 2. Start the Frontend Application
In a new terminal window, navigate to the `frontend` directory, install dependencies, and start the Vite development server:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
*Open the provided local link (typically `http://localhost:5173`) in your browser.*

### 3. Run Tests (Bonus)
To run the automated API tests, navigate to the `backend` directory and execute:
\`\`\`bash
npm test
\`\`\`

## Assumptions & Trade-offs

* [cite_start]**Storage Strategy:** To fulfill the "Persist tasks after refresh" [cite: 40] [cite_start]requirement while adhering to the 1-2 hour time constraint[cite: 33], the backend uses Node's native `fs` module to save data to a local `tasks.json` file. [cite_start]This avoids the overhead of provisioning and connecting to a persistent database [cite: 31] (like PostgreSQL or MongoDB).
* [cite_start]**Frontend Architecture:** Given the intentionally small scope[cite: 33], all core frontend logic and state management are contained within `App.jsx`. This maintains a highly readable structure and prevents unnecessary file fragmentation for a single-view application.
* [cite_start]**Styling Approach:** I opted for plain CSS with CSS Variables rather than utility frameworks (like Tailwind) or component libraries[cite: 29]. [cite_start]This ensures the code is instantly readable without requiring the reviewer to parse utility classes, focusing the evaluation on functionality and correctness[cite: 32].
