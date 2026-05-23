const express = require('express');
const router = express.Router();
const { processEmail } = require('../services/emailService');

router.post('/send', async (req, res) => {
    try {
        const { to, subject, message } = req.body;

        if (!to || !subject || !message) {
            return res.status(400).json({
                status: "error",
                message: "Missing fields"
            });
        }

        const result = await processEmail(to, subject, message);

        return res.status(200).json({
            status: "success",
            message: "Email processed successfully",
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: error.message
        });
    }
});

module.exports = router;
