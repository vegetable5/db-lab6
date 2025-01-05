import { Router } from 'express';
import UserController from './controller.js';
const router = Router();
router.post('/user/', UserController.createUser);
router.patch('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/user/all', UserController.getUsers);
router.get('/user/:id', UserController.getUserById);
export default router;