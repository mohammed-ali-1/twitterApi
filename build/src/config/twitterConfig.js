"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitterApiBearerToken = exports.twitterApiSecretKey = exports.twitterApiKey = void 0;
const dotenv = require("dotenv");
dotenv.config();
const twitterApiKey = process.env.TWITTER_API_KEY;
exports.twitterApiKey = twitterApiKey;
const twitterApiSecretKey = process.env.TWITTER_API_SECRET_KEY;
exports.twitterApiSecretKey = twitterApiSecretKey;
const twitterApiBearerToken = process.env.TWITTER_API_BEARER_TOKEN;
exports.twitterApiBearerToken = twitterApiBearerToken;
//# sourceMappingURL=twitterConfig.js.map