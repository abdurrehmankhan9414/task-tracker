const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [
  { id: 1, text: 'Sample Task 1', done: false },
  { id: 2, text: 'Sample Task 2', done: true }
];

// GET /tasks – return all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks – add a task
app.post('/tasks', (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Task cannot be empty' });
  }

  const newTask = {
    id: tasks.length + 1,
    text,
    done: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

