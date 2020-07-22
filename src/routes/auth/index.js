import Express from 'express';
import { loginUser, registerUser } from '../../controllers/auth/auth.controller';

const router = Express.Router();

/**
 * @api {post} /auth/login User login
 * @apiDescription User Login
 * @apiName UserLogin
 * @apiGroup Authentication

 * @apiParam {String} email Email Id
 * @apiParam {String} password Password
 */
router.post('/login', loginUser);

/**
 * @api {post} /auth/register User registration
 * @apiDescription User registration
 * @apiName UserRegistration
 * @apiGroup Authentication

 * @apiParam {String} email Email Id
 * @apiParam {String} password Password
 */
router.post('/register', registerUser);

export default router;
