const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'tasks.json');

// Helper function to read tasks from file
const readTasks = () => {
  if (!fs.existsSync(DATA_FILE)) return [];
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

// Helper function to save tasks to file
const saveTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// Initialize variables from file
let tasks = readTasks();
let currentId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Task title is required.' });
  }

  const newTask = {
    id: currentId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  saveTasks(tasks); // Save to file
  res.status(201).json(newTask);
});

app.patch('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const task = tasks.find((t) => t.id === id);

  if (!task) return res.status(404).json({ error: 'Task not found.' });

  // Update status and/or title if provided
  if (typeof req.body.completed === 'boolean') task.completed = req.body.completed;
  if (req.body.title && req.body.title.trim() !== '') task.title = req.body.title.trim();

  saveTasks(tasks); // Save to file
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const initialLength = tasks.length;
  tasks = tasks.filter((t) => t.id !== id);

  if (tasks.length === initialLength) return res.status(404).json({ error: 'Task not found.' });

  saveTasks(tasks); // Save to file
  res.status(204).send();
});

// Export the app for testing purposes
module.exports = app;

// Only listen if not running in a test environment
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Backend server running on http://localhost:${PORT}`));
}