import { Router } from 'express';
import userController from '../controllers/UserController';
import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

// Esses não deveriam existir
// router.get('/', LoginRequired, userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', LoginRequired, userController.update);
router.delete('/', LoginRequired, userController.delete);

export default router;
