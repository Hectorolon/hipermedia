const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoutes = require('./routes/authRouter');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();
app.use(
    cookieSession({
        //el tiempo que va a durar
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey] 
    })
);

//le decimos que passport va hacer uso de la cookie
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURL);
authRoutes(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Conectado");
    
});
