import { useState, useEffect } from 'react';
import './App.css';

const API_URL = 'http://localhost:3001/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Bonus: Filter State
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  // Bonus: Edit State
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch tasks');
      setTasks(await response.json());
    } catch (err) { setError(err.message); } 
    finally { setIsLoading(false); }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTaskTitle }),
      });
      if (!response.ok) throw new Error('Failed to add task');
      setTasks([...tasks, await response.json()]);
      setNewTaskTitle('');
    } catch (err) { setError(err.message); }
  };

  // Handles both complete toggling AND title editing
  const updateTask = async (id, updates) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (!response.ok) throw new Error('Failed to update task');
      const updatedTask = await response.json();
      setTasks(tasks.map((t) => (t.id === id ? updatedTask : t)));
      setEditingId(null); // Exit edit mode
    } catch (err) { setError(err.message); }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete task');
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) { setError(err.message); }
  };

  const startEditing = (task) => {
    setEditingId(task.id);
    setEditingText(task.title);
  };

  // Bonus: Calculate filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !newTaskTitle.trim()}>Add Task</button>
      </form>

      {/* Bonus: Filter Buttons */}
      <div className="filters">
        <button className={filter === 'all' ? 'active-filter' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'active' ? 'active-filter' : ''} onClick={() => setFilter('active')}>Active</button>
        <button className={filter === 'completed' ? 'active-filter' : ''} onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {error && <div className="error-message">⚠️ {error}</div>}

      {isLoading ? <p className="loading-message">Loading tasks...</p> : (
        <ul className="task-list">
          {filteredTasks.length === 0 && !error && (
            <div className="empty-state"><p>📝 No tasks found.</p></div>
          )}
          {filteredTasks.map((task) => (
            <li key={task.id} className="task-item">
              <label className="task-label">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => updateTask(task.id, { completed: !task.completed })}
                />
                
                {/* Bonus: Edit Mode UI */}
                {editingId === task.id ? (
                  <input 
                    type="text" 
                    className="edit-input"
                    value={editingText} 
                    onChange={(e) => setEditingText(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <span className={task.completed ? 'completed-text' : ''}>{task.title}</span>
                )}
              </label>

              <div className="action-buttons">
                {editingId === task.id ? (
                  <button onClick={() => updateTask(task.id, { title: editingText })} className="save-btn">Save</button>
                ) : (
                  <button onClick={() => startEditing(task)} className="edit-btn">Edit</button>
                )}
                <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;