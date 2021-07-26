import { Router } from 'express';
import AlunoController from '../controllers/AlunoController';
import LoginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', LoginRequired, AlunoController.store);
router.get('/:id', AlunoController.show);
router.delete('/:id', LoginRequired, AlunoController.delete);
router.put('/:id', LoginRequired, AlunoController.update);

export default router;
