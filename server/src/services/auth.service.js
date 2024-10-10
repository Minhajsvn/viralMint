const User = require('../models/user.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}

const generateToken = (id) => {
    return jwt.sign({ user: { id: id }}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'});
}

const registerUser = async (user) => {
    const existingUser = await getUserByEmail(user.email);
    if(existingUser){
        throw new Error('user already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)
    const newUser = await User.create({ ...user, password: hashedPassword });

    return generateToken(newUser.id);
}


const loginUser = async (data) => {
    const { email, password } = data;

    const user = await getUserByEmail(email);
    if(!user) throw new Error('Invalid Credentials');
    
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('Invalid Credentials');

    return generateToken(user.id);
}


module.exports = {
    registerUser,
    loginUser
}