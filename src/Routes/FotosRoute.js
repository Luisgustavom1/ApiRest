import { Router } from 'express';

import fotosController from '../controllers/FotosController';

const router = new Router();

router.post('/', fotosController.index);

export default router;
