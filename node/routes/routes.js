import express from 'express'
import { getAllBlogs, getBlog, createBlog,updateBlog, deleteBlog,loginUser } from '../controller/BlogController.js'


const router = express.Router()

router.get('/',getAllBlogs)
router.get('/:id',getBlog)
router.post('/',createBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)
router.post('/login',loginUser)





export default  router;


