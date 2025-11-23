const express = require('express');
const fetch = require('node-fetch');
const FormData = require('form-data');
const multer = require('multer');
const imageModel = require('../models/Image');
const Authentication = require('../Middleware/employeeAuthentication')


const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); 

router.post('/checkuser', upload.single('File'), async (req, res) => {
    console.log("test");
    try {
   
        const userName = "debabratodas";
        const uploadedFile = req.file;

        const existingImage = await imageModel.findOne({ userName });
        if (!existingImage) {
            return res.status(404).json({ message: 'User not found' });
        }

        const imageUrl = existingImage.imageUrl;
        console.log(imageUrl);

        // Prepare form-data to send to Flask API
        const formData = new FormData();
        formData.append('url1', imageUrl); // send stored image URL
        formData.append('file2', uploadedFile.buffer, { filename: uploadedFile.originalname });

        // Send request to Flask /compare-faces API
        const response = await fetch('http://localhost:8000/compare-faces', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        // Forward Flask result to frontend
        return res.json({
            userName,
            flaskResult: result,
        });

    } catch (error) {
        console.error("Error during face comparison:", error);
        return res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
