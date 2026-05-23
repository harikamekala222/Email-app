const processEmail = async (to, subject, message) => {

    const formatted = `
Hello,

${message}

Regards,
AI SaaS Email System
`;

    console.log("TO:", to);
    console.log("SUBJECT:", subject);
    console.log("BODY:", formatted);

    return {
        to,
        subject,
        status: "processed"
    };
};

module.exports = { processEmail };
