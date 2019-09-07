const jwt = require("jsonwebtoken");
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");
const auth = (req,res,next) => {
    const token = req.header("x-auth-token");
    if(!token) {
        res.status(statusCodes.UNAUTHORIZED).json({success:false, message: messages.NoAuthToken});
    }
    try {
        const decoded = jwt.verify(token, 'jwtPrivateKey');
        req.user = decoded;
        next();
    }
    catch (ex) {
        res.status(statusCodes.BAD_REQUEST).json({success: false, message: messages.InvalidAuthToken});
    }
} 

module.exports = {
    auth
};