const express = require('express');
const router = express.Router();
const { addOrUpdateIp, getIp } = require('../controllers/IpController');

router.post('/ip', addOrUpdateIp);
router.get('/ip', getIp);

module.exports = router;
