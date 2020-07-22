import Express from 'express';

// Hackathon modules
import hackathonRouter from './hackathon.routes.js';

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
// router.use(authenticate);  // TODO switch on authentication
router.use('/hackathons', hackathonRouter);

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
