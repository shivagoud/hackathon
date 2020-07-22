import Express from 'express';
import { apiNotReady } from '../controllers/api.controller';

const router = Express.Router();
/**
 * @api {post} /hackathon_groups Create hackathon Group
 * @apiDescription Create a group for hackathon
 * @apiHeader {String} authorization JWT Token.
 * @apiName CreateGroup
 * @apiGroup HackathonGroups
 */
router.post('/', apiNotReady);

/**
 * @api {patch} /hackathon_groups/:id/invite_more Invite user to a group
 * @apiDescription Invite users to a group for hackathon
 * @apiHeader {String} authorization JWT Token.
 * @apiName InviteGroupMembers
 * @apiGroup HackathonGroups
 */
router.patch('/:id/invite_more', apiNotReady);

/**
 * @api {post} /hackathon_groups/:id/registrations Accept Invitation for Hackathon
 * @apiDescription Register for hackathon by invitation
 * @apiHeader {String} authorization JWT Token.
 * @apiName RegisterForHackathon
 * @apiGroup HackathonGroups
 */
router.post('/:id/registrations', apiNotReady);


export default router;
