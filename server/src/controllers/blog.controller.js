const blogService = require('../services/blog.service')


const createBlog = async (req, res) => {
    try {
        const blog = await blogService.createNewBlog(req.user.id, req.body);
        res.status().json({ message: 'Successfully created', blog })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.fetchAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllBlogs,
    createBlog,
}