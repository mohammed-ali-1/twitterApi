"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHandler = void 0;
const needle = require("needle");
const twitterConfig_1 = require("../../config/twitterConfig");
async function requestHandler(req, res) {
    var _a;
    const id = req.body.id;
    const maxResults = (_a = req.body.maxResults) !== null && _a !== void 0 ? _a : 5;
    const twitterLikesUrl = `https://api.twitter.com/2/users/${id}/liked_tweets?max_results=${maxResults}`;
    needle('get', twitterLikesUrl, {
        headers: {
            Authorization: `Bearer ${twitterConfig_1.twitterApiBearerToken}`,
        },
    })
        .then(resp => {
        res.json(resp.body);
        res.status(200);
        res.end();
    })
        .catch(err => {
        console.dir(err);
        res.status(500);
        res.end();
    });
}
exports.requestHandler = requestHandler;
//# sourceMappingURL=post.js.map