import express from "express"
import consign from "consign";

const app = express();

app.set('env',process.env.NODE_ENV||'development')

consign()
    .include("libs/config.js")
    .then("libs/db.js")
    .then('libs/auth/authJWT.js')
    .then("middlewares")
    .then("controllers")
    .then("error.js")
    .then("libs/boot.js")
    .into(app);
/*if(app.get('env')==='development'){
    require('./libs/seeder')(app.libs.db)
}*/
module.exports = app;

