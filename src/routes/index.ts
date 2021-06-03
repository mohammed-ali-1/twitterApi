import * as express from 'express';

import {router as likesRouter} from './likes';

export const router = express.Router();

router.use('/likes', likesRouter);
