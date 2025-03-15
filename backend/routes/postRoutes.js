// backend/routes/postRoutes.js
const express = require('express');
const Post = require('../models/Post');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Create a new post
router.post('/create', upload.single('media'), async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      media: req.file ? req.file.path : null,
    });

    await newPost.save();
    res.status(201).json({ message: 'Post created successfully!', post: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating post', error: err });
  }
});

module.exports = router;
