const Blog = require('../models/blog.model');


const fetchAllBlogs = async () => {
    return await Blog.find().populate('user', 'name');
}

const createNewBlog = async (userId, { title, content, location }) => {
    const newBlog = new Blog({ title, content, location, user: userId });
    return await newBlog.save();
}


module.exports = {
    fetchAllBlogs,
    createNewBlog,
}