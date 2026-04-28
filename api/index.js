const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Message = require('./models/messageModel');
const Project = require('./models/projectModel');

const app = express();
// In server/index.js
const corsOptions = {
  origin: 'http://localhost:5173', // Allow only your Vite frontend
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));
app.use(express.json()); // Essential for parsing JSON from React

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

// The API Route

// GET all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post('/api/contact', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: "Sent successfully!" }); 
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));