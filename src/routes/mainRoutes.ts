import { Router } from "express";

import itemsController from '../controllers/itemsController';

const router = Router();


router.get('/', itemsController.home);
router.get('/products/:filter', itemsController.products);

export default router;