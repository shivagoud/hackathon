import Express from 'express';
import { loginUser, registerUser } from '../../controllers/auth/auth.controller';

const router = Express.Router();

router.use('/login', loginUser);
router.use('/register', registerUser);

export default router;
