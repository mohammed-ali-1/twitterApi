"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appConfig_1 = require("./config/appConfig");
const express = require('express');
const bodyParser = require('body-parser');
const routes_1 = require("./routes");
const app = express();
app.use(bodyParser.json());
//@ts-ignore
app.use(function (req, res, next) {
    if (typeof req.body.maxResult !== 'number') {
        res.statusCode = 400;
        res.send('id must be number');
        res.end();
        next();
    }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', routes_1.router);
app.listen(appConfig_1.port, () => {
    console.log('Express server is running on PORT:', appConfig_1.port);
});
// module.exports = app;
//# sourceMappingURL=app.js.map