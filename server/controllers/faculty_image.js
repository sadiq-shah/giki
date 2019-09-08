const FacultyImage = require("./../models").Faculty_Image;
const validate = require("./../validation").Faculty_Image;
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");

const create = (req,res) => {
    const {error} = validate(req.body);
    if(error) return res.status(statusCodes.BAD_REQUEST).send(error.details[0].message);

    FacultyImage.create({
        ...req.body
    })
    .then(facultyImage => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: facultyImage});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    FacultyImage
    .findByPk(id)
    .then(facultyImage => {
        if(!facultyImage) {
            res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
        }
        else {
            res.status(statusCodes.OK).json({success:true, data: facultyImage});
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });
}

const list = (req,res) => {
    FacultyImage
    .findAll()
    .then(facultyImages => {
        res.status(statusCodes.OK).json({ success:true, data: facultyImages });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const update = (req,res) => {
    const id = req.params.id;
    FacultyImage
    .findByPk(id)
    .then(facultyImage => {
        if(!facultyImage) {
            res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
        }
        else {
            const {error} = validate(req.body);
            if(error) return res.status(statusCodes.BAD_REQUEST).send(error.details[0].message);

            facultyImage.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: facultyImage
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
    FacultyImage
    .findByPk(id)
    .then(facultyImage => {
        if(!facultyImage) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            facultyImage
            .destroy()
            .then(() => {
                res.status(statusCodes.OK).json({
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