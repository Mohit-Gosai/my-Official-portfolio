const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  tech: [String],
  link: String,
  image: String
});

module.exports = mongoose.model('Project', projectSchema);