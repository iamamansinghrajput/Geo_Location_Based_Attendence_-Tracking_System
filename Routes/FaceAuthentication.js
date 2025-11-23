const express = require('express');
const multer = require('multer');
const streamifier = require('streamifier');
const { v2: cloudinary } = require('cloudinary');
const imageModel = require('../models/Image');
const authenticate = require('../Middleware/employeeAuthentication');

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });


// Configure Cloudinary
cloudinary.config({
  cloud_name: "dgyesbgx1",         
  api_key: "372377655181496",
  api_secret: "GKdc66lDpVPKcHC3INLfNnTu77o",
});

// Route to upload image
router.post('/upload',authenticate, upload.single('profilePic'), async (req, res) => {
  try {
    console.log(req.user.userName)
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
          {
            folder: 'profile_pics', // optional folder in your cloudinary
          },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
     const result = await streamUpload(req);
    const obj = {
      userName: req.user.userName,
      imageUrl: result.secure_url,
    }
    console.log(imageUrl);

    // Save image URL to the database
    const existingImage = await imageModel.findOne({ userName: req.user.userName });
    if (existingImage) {
      existingImage.imageUrl = result.secure_url;
      await existingImage.save();
    } else {
      const newImage = new imageModel(obj);
      await newImage.save();
    }

    res.status(200).json({ message: 'Uploaded successfully', url: result.secure_url });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ message: 'Upload failed', error: err });
  }
});

module.exports = router;

