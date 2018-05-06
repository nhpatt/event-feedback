const path = require('path');
const express = require('express');
const basicAuth = require('express-basic-auth');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const indexController = require('./controllers/index');
const talksController = require('./controllers/talks');
const adminController = require('./controllers/admin');

const config = require('./config');

module.exports = (app) => {
    app.use('/', express.static(path.join(__dirname, '/favicons')));
    app.use('/static', express.static(path.join(__dirname, '/static')));
    app.use('/admin-new', express.static(path.join(__dirname, '/admin/ui')));
    app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));
    app.get('/', indexController.getIndex);
    app.get('/talk/:slug', talksController.getTalkById);
    app.post('/talk/:slug', talksController.postFeedback);

    app.get('/admin', basicAuth({
        users: { [config.admin.user]: config.admin.password },
        challenge: true,
        realm: config.admin.realm
    }), adminController.getIndex);
};