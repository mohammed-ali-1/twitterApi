"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
const appConfig_1 = require("./config/appConfig");
const express = require('express');
const bodyParser = require('body-parser');
const routes_1 = require("./routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('', routes_1.router);
app.listen(appConfig_1.port, () => {
    console.log('Express server is running on PORT:', appConfig_1.port);
});
// module.exports = app;
//# sourceMappingURL=app.js.map