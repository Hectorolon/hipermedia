const passport = require('passport');
const GooogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
//Lo convertimos en a un objeto, para mandarlo como texto
passport.serializeUser((user, done) => {
  //encriptarla, done
  done(null, user.id);
});

//Si esta mal, busca en la cookie 
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
passport.use(
    new GooogleStrategy({
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((exixtingUser) => {
          if(exixtingUser){
            done(null, exixtingUser);
            console.log(exixtingUser);
          }else{
            new User({ googleId: profile.id })
              .save()    
              .then(user => done(null, user));
          }
        })
    })
  );
