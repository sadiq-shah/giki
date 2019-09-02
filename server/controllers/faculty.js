const Faculty = require("./../models").Faculty;
const messages = require("./../constants/messages");
const statusCodes = require("./../constants/statusCodes");
const { toSlug } = require("./../functions/helpers");

const create = (req,res) => {
    Faculty.create({
        ...req.body,
        slug: toSlug(req.body.name)
    })
    .then(faculty => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: faculty});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    Faculty.findByPk(id)
            .then(faculty => {
                if(!faculty) {
                    res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
                }
                else {
                    res.status(statusCodes.OK).json({success:true, data: faculty});
                }
            })
            .catch(err => {
                res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
            });
}

const list = (req,res) => {
    Faculty.findAll()
            .then(faculties => {
                res.status(statusCodes.OK).json({
                    success:true,
                    data: faculties
                });
            })
            .catch((err) => {
                res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
            });
}

const update = (req,res) => {
    const id = req.params.id;
    Faculty.findByPk(id)
            .then(faculty => {
                if(!faculty) {
                    res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
                }
                else {
                    faculty.update(
                        req.body,{
                        fields: Object.keys(req.body)
                    })
                    .then(() => {
                        res.status(statusCodes.OK).json({
                            success: true,
                            message: messages.ResourceUpdated,
                            data: faculty
                        })
                    })
                    .catch((err) => {
                        res.status(statusCodes.NOT_FOUND).json({
                            success: true,
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
    Faculty.findByPk(id)
            .then(faculty => {
                if(!faculty) {
                    res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
                }
                else {
                faculty.destroy()
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

module.exports = {
    create,
    retrieve,
    list,
    update,
    destroy
}