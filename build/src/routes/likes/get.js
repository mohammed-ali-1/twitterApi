"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHandler = void 0;
const needle = require("needle");
const twitterConfig_1 = require("../../config/twitterConfig");
async function requestHandler(req, res) {
    const id = req.params.id;
    console.log(req.params);
    const twitterLikesUrl = `https://api.twitter.com/2/users/${id}/liked_tweets`;
    const likes = await needle('get', twitterLikesUrl, {
        headers: {
            Authorization: `Bearer ${twitterConfig_1.twitterApiBearerToken}`,
        },
    });
    // console.log(likes);
    res.status(200);
}
exports.requestHandler = requestHandler;
//# sourceMappingURL=get.js.map