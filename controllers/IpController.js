const IpSaver = require('../models/IpSaver');

async function addOrUpdateIp(req, res) {
    try {
        const { ip } = req.body;
        if (!ip) return res.status(400).json({ success: false, message: 'ip is required' });

        let record = await IpSaver.findOne();
        if (record) {
            record.ip = ip;
            await record.save();
        } else {
            record = await IpSaver.create({ ip });
        }

        return res.status(200).json({ success: true, data: record });
    } catch (err) {
        console.error('addOrUpdateIp error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}

async function getIp(req, res) {
    try {
        const record = await IpSaver.findOne();
        if (!record) return res.status(404).json({ success: false, message: 'No ip found' });
        return res.status(200).json({ success: true, data: record });
    } catch (err) {
        console.error('getIp error:', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}

module.exports = {
    addOrUpdateIp,
    getIp,
};
