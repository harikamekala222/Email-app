const emailService = require('../services/emailService');

const sendEmail = async (req, res) => {
    const { to, subject, message } = req.body;

    const result = await emailService.processEmail(to, subject, message);

    res.json({
        status: "success",
        result
    });
};

module.exports = { sendEmail };