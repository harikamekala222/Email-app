const processEmail = async (to, subject, message) => {

    const formatted = `
Hello,

${message}

Regards,
AI SaaS Email System
`;

    console.log("Sending To:", to);
    console.log("Subject:", subject);
    console.log("Body:", formatted);

    return {
        to,
        subject,
        status: "sent"
    };
};

module.exports = { processEmail };