const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Message = require('./models/messageModel');
const Project = require('./models/projectModel');
const upload = require('./middleware/multer');

const app = express();
// In server/index.js
const corsOptions = {
  // This allows your Vercel frontend to talk to your Vercel backend
  origin: ["http://localhost:5173", /\.vercel\.app$/], 
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type'
};

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    isConnected = db.connections[0].readyState;
    console.log("Database Connected");
  } catch (err) {
    console.log("DB Error:", err);
  }
};

// Use middleware to ensure DB is connected before handling routes
app.use(async (req, res, next) => {
  await connectDB();
  next();
}); 
app.use(cors(corsOptions));
app.use(express.json()); // Essential for parsing JSON from React



// Route to create a project with an image
app.post('/api/projects', upload.single('image'), async (req, res) => {
  try {
    const newProject = new Project({
      ...req.body,
      image: req.file.path,            // Cloudinary URL
      cloudinary_id: req.file.filename // Cloudinary ID
    });
    
    await newProject.save();
    res.status(201).json({ success: true, data: newProject });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

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

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;