const FacultyMember = require("./../models").Faculty_Member;
const validate = require("./../validation").Faculty_Member;
const messages = require("./../constants/messages");
const statusCodes = require("./../constants/statusCodes");

const create = (req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    FacultyMember.create({
        ...req.body
    })
    .then(facultyMember => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: facultyMember});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    FacultyMember.findByPk(id)
            .then(facultyMember => {
                if(!facultyMember) {
                    res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
                }
                else {
                    res.status(statusCodes.OK).json({success:true, data: facultyMember});
                }
            })
            .catch(err => {
                res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
            });
}

const list = (req,res) => {
    FacultyMember
    .findAll()
    .then(facultyMembers => {
        res.status(statusCodes.OK).json({
            success:true,
            data: facultyMembers
        });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const update = (req,res) => {

    const {error} = validate(req.body);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    const id = req.params.id;
    FacultyMember
    .findByPk(id)
    .then(facultyMembers => {
        if(!facultyMembers) {
            res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
        }
        else {
            
            facultyMembers.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: facultyMembers
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
    FacultyMember
    .findByPk(id)
    .then(facultyMember => {
        if(!facultyMember) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            facultyMember.destroy()
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