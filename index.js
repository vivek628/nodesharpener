
const express = require('express');

const bodyParser = require('body-parser');
const loginRoute = require('./routes/loginRoutes');
const messageRoute = require('./routes/messageRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginRoute);
app.use(messageRoute);

app.listen(3000, () => {
    console.log("server is running on 3000");
});
