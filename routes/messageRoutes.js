const express = require('express');
const route = express.Router();
const fs = require('fs');

route.post('/', (req, res, next) => {
    const userData = {};

    if (req.body.msg !== undefined) {
        const msg = req.body.msg;
        userData.msg = msg;
    }

    if (req.body.username !== undefined) {
        const username = req.body.username;
        userData.username = username;
    }

    console.log(userData);
    const jsonData = JSON.stringify(userData);

   
    fs.appendFile('messages.json', jsonData + '\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data written to file');
        }
    });
    const messages = fs.readFileSync('messages.json', 'utf8').split('\n');
    
    console.log("messages is", messages)
     
    res.send(`${messages}<form action='/' method='POST'><input placeholder='enter your massage' name='msg'></input><button>send</button></form>`);
});

module.exports = route;
