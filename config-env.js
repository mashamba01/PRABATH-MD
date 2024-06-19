
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()

module.exports = {
    SESSION_ID:  process.env.SESSION_ID,PRABATH-MD~wVRGGCwY#I6ugiang-wX8CcAV5BpShadJSiModQoa9T33tOV2zTY    
    BOT_NUMBER:  process.env.BOT_NUMBER,+27642501314
    GITHUB_USERNAME: username,mashamba01
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN,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
};
