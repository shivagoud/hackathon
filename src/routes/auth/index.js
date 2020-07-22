import Express from 'express';
import { loginUser, registerUser } from '../../controllers/auth/auth.controller';

const router = Express.Router();

/**
 * @api {get} /login User login
 * @apiDescription User Login
 * @apiName UserLogin
 * @apiGroup Authentication

 * @apiParam {String} email Email Id 
 * @apiParam {String} password Password
 */
router.get('/login', loginUser);

/**
 * @api {post} /login User registration
 * @apiDescription User registration
 * @apiName UserRegistration
 * @apiGroup Authentication

 * @apiParam {String} email Email Id
 * @apiParam {String} password Password
 */
router.post('/register', registerUser);

export default router;
