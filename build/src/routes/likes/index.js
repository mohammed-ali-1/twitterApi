"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const post = require("./post");
exports.router = express.Router();
exports.router.post('/', post.requestHandler);
//# sourceMappingURL=index.js.map