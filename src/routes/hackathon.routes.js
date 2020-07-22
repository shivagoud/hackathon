import Express from 'express';
import { getHackathons } from '../controllers/hackathon.controller';
import { apiNotReady } from '../controllers/api.controller';

const router = Express.Router();

/**
 * @api {get} /hackathons Get hackathons
 * @apiDescription Get list of hackathons
 * @apiHeader {String} authorization JWT Token.
 * @apiName GetHackathons
 * @apiGroup Hackathons
 */
router.get('/', getHackathons);

/**
 * @api {get} /hackathons/:id/details Get hackathon details
 * @apiDescription Get hackathon details
 * @apiHeader {String} authorization JWT Token.
 * @apiName GetHackathonDetails
 * @apiGroup Hackathons
 */
router.get('/:id', apiNotReady);

/**
 * @api {post} /hackathons/:id/submissions Submit code
 * @apiDescription Submit a code for evaluation
 * @apiHeader {String} authorization JWT Token.
 * @apiName SubmitCode
 * @apiGroup Submissions
 *
 * @apiParam {String} code_text Code in text format 
 * @apiParam {String} language Programming Language selected
 */
router.post('/:id/submissions', apiNotReady);
//Response:::: score, Test_results

// Response:::: Submissions of the group along with results
/**
 * @api {get} /hackathons/:id/submissions Get submissions
 * @apiDescription Get all submissions made by the current user
 * @apiHeader {String} authorization JWT Token.
 * @apiName GetSubmissions
 * @apiGroup Submissions
 */
router.get('/:id/submissions', apiNotReady);

/**
 * @api {get} /hackathons/:id/ranking Get current ranking
 * @apiDescription Get ranking of Submissions
 * @apiHeader {String} authorization JWT Token.
 * @apiName GetRanking
 * @apiGroup Ranking
 */
router.get('/:id/ranking', apiNotReady);


export default router;
