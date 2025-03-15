const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./model/User")
const multer = require('multer');
const Posts = require("./model/Posts");
const path = require("path");
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/signup", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})





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
app.post('/create', upload.single('media'), async (req, res) => {
  try {
    const newPost = new Posts({
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


app.post('/logout', (req, res) => {
    // Clear the user session or token (if using session or token-based authentication)
    res.status(200).json({ message: 'User logged out successfully!' });
  });

app.listen(3001, () => {
    console.log("server is running")
})
