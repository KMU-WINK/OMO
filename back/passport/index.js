const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
    passport.serializeUser((user, done) => {
       done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
       try{
           const user = await User.findOne({where: { id }});
           done(null, user)
       } catch (e) {
           console.error(e);
           done(e);
       }
    });

    local();
};