import Router from 'express';
// import { signUp, signIn } from '../controllers/user.js';
import { signUpValidator, signInValidator } from '../validators/user.js';
import validateResult from '../middleware/validatorHandler.js';

const router = Router();

router.post('/signup', signUpValidator, validateResult);
router.post('/signin', signInValidator, validateResult);

export default router;
