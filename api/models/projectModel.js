const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  tech: [String],
  link: String,
  image: { type: String, required: true }, // The URL from Cloudinary
  cloudinary_id: { type: String }         // For deleting/updating images
});

module.exports = mongoose.model('Project', projectSchema);