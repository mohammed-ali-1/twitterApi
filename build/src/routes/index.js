"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const likes_1 = require("./likes");
exports.router = express.Router();
exports.router.use('/likes', likes_1.router);
//# sourceMappingURL=index.js.map