import { Router } from 'express'
import { Register, Login, getAllUsers } from '../controller/user.controller'

const router = Router();

router.post('/', Register)
router.get('/', getAllUsers)
router.post('/user', Login)

export default router;