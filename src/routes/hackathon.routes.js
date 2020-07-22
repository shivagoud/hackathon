import Express from 'express';
import { getHackathons } from '../controllers/hackathon.controller';

const router = Express.Router();
/**
 * @api {get} /hackathons Get hackathons
 * @apiDescription Get list of hackathons
 * @apiHeader {String} authorization JWT Token.
 * @apiName GetHackathons
 * @apiGroup Hackathons
 */
router.get('/', getHackathons);

export default router;
