import {Request, Response} from 'express';

import * as needle from 'needle';

import {twitterApiBearerToken} from '../../config/twitterConfig';

export async function requestHandler(
  req: Request,
  res: Response
): Promise<void> {
  const id = req.body.id;
  const maxResults = req.body.maxResults ?? 5;

  const twitterLikesUrl = `https://api.twitter.com/2/users/${id}/liked_tweets?max_results=${maxResults}`;

  needle('get', twitterLikesUrl, {
    headers: {
      Authorization: `Bearer ${twitterApiBearerToken}`,
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
