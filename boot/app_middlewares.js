import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import express from  'express'

module.exports = (app) => {
    app.set('views', path.join(__dirname, './views'));
    //app.set('env')
    app.set('view engine', 'hbs');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '../public')));

}