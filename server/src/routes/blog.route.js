const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller')
const authMiddleware = require('../middlewares/authToken');


router.post('/create', authMiddleware, blogController.createBlog);
router.get('/', blogController.getAllBlogs);


module.exports = router;



