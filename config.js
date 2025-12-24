const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'rANjGQDD#07qewLC5IiQhUCbooTppquLMYEX7zY0RJNaQDGX2qzI', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://shahzadabaloooch:DfdSqWiEsbDxefG9@cluster0.jae9sf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',// Enter Your MongoDB URL
    OWNER_NUMBER: process.env.OWNER_NUMBER || '923142235217',    // Enter Your Owner Number
};
