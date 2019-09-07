const _ = require("lodash");
const User = require("./../models").User;
const messages = require("./../constants/messages");
const statusCodes = require("./../constants/statusCodes");
const { hashPassword, passwordValidity, generateToken } = require("./../functions/helpers");

const create = async (req,res) => {
    req.body.password = await hashPassword(req.body.password);
    User.create({
        ...req.body
    })
    .then(user => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: _.pick["id", "name", "email"]});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:false, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    User.findByPk(id)
            .then(user => {
                if(!user) {
                    res.status(statusCodes.NOT_FOUND).json({success:false, message: messages.ResourceNotFound})
                }
                else {
                    res.status(statusCodes.OK).json({success:true, data: user});
                }
            })
            .catch(err => {
                res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
            });
}

const list = (req,res) => {
    User
    .findAll()
    .then(users => {
        res.status(statusCodes.OK).json({
            success:true,
            data: users
        });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const login = (req,res) => {
    User
    .findOne({
        where: {email: req.body.email}
    })
    .then( async user => {
        if(!user) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.invalidEmail});
        }
        else {
            const validPassword = await passwordValidity(req.body.password,user.password);
            if(!validPassword) {
                res.status(statusCodes.UNAUTHORIZED).json({success: false, message: messages.loginFailed});
            }
            else {
                const token =  generateToken(user);
                res.header('x-auth-token', token).status(statusCodes.OK).json({success: true, data: _.pick["id", "name", "email"]} );
            }
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });
}

const update = (req,res) => {
    const id = req.params.id;
    User
    .findByPk(id)
    .then(user => {
        if(!user) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            user.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: user
                })
            })
            .catch((err) => {
                res.status(statusCodes.NOT_FOUND).json({
                    success:false,
                    err: err
                });
            })
        }
    })
    .catch((err) => {
        res.status(statusCodes.NOT_FOUND).json({
            success: false,
            err: err
        })
    })
}

const destroy = (req,res) => {
    const id = req.params.id;
    User
    .findByPk(id)
    .then(user => {
        if(!user) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            user.destroy()
            .then(() => {
                res.status(statusCodes.Ok).json({
                    success:true,
                    message: messages.ResourceDestroyed
                })
            })
            .catch(err => {
                res.status(statusCodes.BAD_REQUEST).json({
                    success: false,
                    err: err
                })
            })
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            err: err
        })
    })
}

// Information Expert Principle
const getUserFromAuth = (req,res) => {
    const user = req.user;
    console.log(user.id);
    User
    .findByPk(user.id)
    .then(user => {
        res.status(statusCodes.OK).json({success: true, data: user});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    })
}

module.exports = {
    create,
    retrieve,
    list,
    update,
    destroy,
    login,
    getUserFromAuth
}