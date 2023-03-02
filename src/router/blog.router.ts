import { Router } from 'express'
import { createBlog, getAllBlog, getUserWithBlog, updateBlog, deleteBlog, deleteBlogs} from '../controller/blog.controller'

const router = Router();

router.post('/', createBlog)
router.get('/', getAllBlog)
router.get('/', getUserWithBlog)
router.post('/update', updateBlog)
router.post('/delblogs', deleteBlogs)
router.post('/delblog', deleteBlog)

export default router;