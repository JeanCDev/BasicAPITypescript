"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.Router();
routes.get('/', (req, res, next) => {
    res.send('Home page');
});
routes.get('/test', (req, res, next) => {
    res.send('Test page');
});
exports.default = routes;
