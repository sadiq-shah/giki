const coursePreReq = require("../models").course_pre_req;
const messages = require("../constants/messages");
const statusCodes = require("../constants/statusCodes");
const { toSlug } = require("../functions/helpers");

const create = (req, res) => {
    console.log(req.body),
        coursePreReq.create({
            course_id: req.body.id,
        }).then(cpr => {
            res.status(200).send(cpr);
        })
        .catch(err => {
            console.log(err)
        })
}

const retrieve = (req, res) => {
    const id = req.params.id;
    coursePreReq.findByPk(id)
        .then(course => {
            if (!course) {
                res.status(statusCodes.NOT_FOUND).json({ success: true, message: messages.ResourceNotFound })
            } else {
                res.status(statusCodes.OK).json({ success: true, data: course });
            }
        })
        .catch(err => {
            res.status(statusCodes.BAD_REQUEST).json({ success: false, err: err });
        });
}

const list = (req, res) => {
    coursePreReq.findAll()
        .then(courses => {
            res.status(statusCodes.OK).json({
                success: true,
                data: courses
            });
        })
        .catch((err) => {
            res.status(statusCodes.BAD_REQUEST).json({ success: false, err: err });
        });
}

const update = (req, res) => {
    const id = req.params.id;
    console.log(id);
    coursePreReq.findByPk(id)
        .then(course => {
            course.update({
                    course_id: req.body.id,
                }).then(cpr => {
                    res.status(200).send(cpr);
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch((err) => {
            res.status(statusCodes.NOT_FOUND).json({
                success: false,
                err: err
            })
        })
}

const destroy = (req, res) => {
    const id = req.params.id;
    coursePreReq.findByPk(id)
        .then(course => {
            if (!course) {
                res.status(statusCodes.NOT_FOUND).json({ success: false, message: messages.ResourceNotFound });
            } else {
                course.destroy()
                    .then(() => {
                        res.status(statusCodes.Ok).json({
                            success: true,
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
    destroy,
    // retrieveFacultyMembers,
    // retrieveFacultyImages
}