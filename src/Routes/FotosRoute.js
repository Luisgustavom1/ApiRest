import { Router } from 'express';

import fotosController from '../controllers/FotosController';
import loginRequired from '../middlewares/LoginRequired';

const router = new Router();

router.post('/', loginRequired, fotosController.store);

export default router;
