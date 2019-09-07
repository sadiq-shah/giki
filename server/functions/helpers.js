const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const toSlug = (text) => {
    return text.toLowerCase().replace(/ /g, "-");
};

const  hashPassword = (password) => {
    const salt =  bcrypt.genSalt(10);
    const hashed =  bcrypt.hash(password, salt);
    return hashed;
}

const passwordValidity = (passwordEntered, validPassword) => {
    return  bcrypt.compare(passwordEntered, validPassword);
}

const generateToken = (user) => {
    return jwt.sign({ id:user.id, role_id: user.role_id }, 'jwtPrivateKey')
}

module.exports = {
    toSlug,
    hashPassword,
    passwordValidity,
    generateToken
}