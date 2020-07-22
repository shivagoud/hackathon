import Express from 'express';

// Hackathon modules
import hackathonRouter from './hackathon.routes';
import hackathonGroupRouter from './hackathon_group.routes';

import authRouter from './auth';

import authenticate from '../controllers/auth/auth.controller';
import {
  browserAccessControl, devOnly, send404, sendSampleResponse,
} from '../controllers/api.controller';

const router = Express.Router();

// All routes
router.use(browserAccessControl);

// Public routes
router.use('/auth', authRouter);
router.use('/doc', devOnly, Express.static('./doc'));

// Partially private routes
// router.use('/example_resources', exampleRouter);

// Fully private routes
router.use(authenticate);
router.use('/hackathons', hackathonRouter);
router.use('/hackathon_groups', hackathonGroupRouter);

/**
 * @api {get} / Get sample response
 * @apiDescription Get a sample response for logged in users
 * @apiHeader {String} authorization JWT Token.
 * @apiName GetSampleResponse
 * @apiGroup Profile
 */
router.get('/', sendSampleResponse);

router.use('*', send404);

export default router;
