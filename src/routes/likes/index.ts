import * as express from 'express';

import * as post from './post';

export const router = express.Router();

router.post('/', post.requestHandler);
