/* eslint-disable @typescript-eslint/ban-ts-comment */
import {port} from './config/appConfig';
const express = require('express');
const bodyParser = require('body-parser');

import {router} from './routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('', router);

app.listen(port, () => {
  console.log('Express server is running on PORT:', port);
});
// module.exports = app;
