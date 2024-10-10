const authService = require('../services/auth.service');


const register = async (req, res) => {
    try {
        const token = await authService.registerUser(req.body);
        res.status(200).json({ message: 'Registered Successfully', token })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const login = async (req, res) => {
    try {
        await authService.loginUser(req.body);
        res.status(200).json({ message: 'Sign in Successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}


module.exports = {
    register,
    login
}