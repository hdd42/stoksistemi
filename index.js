import express from "express"
import consign from "consign";

const app = express();

consign()
    .include("libs/config.js")
    .then("libs/db.js")
    .then("middlewares")
    .then("controllers")
    .then("error.js")
    .then("libs/boot.js")
    .into(app);

module.exports = app;

