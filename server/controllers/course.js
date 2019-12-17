const Course = require("./../models").Course;
const validate = require("./../validation").Course;
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");
const course_pre_req = require("./../models").course_pre_req;
const course_co_req = require("./../models").course_co_req;


const create = (req,res) => {
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    Course.create({
        ...req.body
    })
    .then(course => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: course});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    Course
    .findByPk(id)
    .then(course => {
        if(!course) {
            res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
        }
        else {
            res.status(statusCodes.OK).json({success:true, data: course});
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });
}

const list = (req,res) => {
    Course
    .findAll()
    .then(course => {
        res.status(statusCodes.OK).json({ success:true, data: course });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const update = (req,res) => {

    const {error} = validate(req.body, true);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    const id = req.params.id;
    Course
    .findByPk(id)
    .then(course => {
        if(!course) {
            res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
        }
        else {

            course.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: course
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
    Course
    .findByPk(id)
    .then(course => {
        if(!course) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            course
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

const retrieveCoursePreReqs = (req,res) => {
    const id = req.params.id; 
    console.log(`ID = ${id}`); 
    Course
    .findByPk(id, {
        include: [{
            model: course_pre_req,
            as: "course_pre_req"
        }]
    })
    .then(course_pre_reqs => {
        console.log("Fail");
        res.status(statusCodes.OK).json({success: true, data: course_pre_reqs});
    })
    .catch(err => {
        console.log("Failedddddddddddddd");
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });  
}
const retrieveCourseCoReqs = (req,res) => {
    const id = req.params.id; 
    console.log(`ID = ${id}`); 
    Course
    .findByPk(id, {
        include: [{
            model: course_co_req,
            as: "course_co_req"
        }]
    })
    .then(course_co_reqs => {
        console.log("Fail");
        res.status(statusCodes.OK).json({success: true, data: course_co_reqs});
    })
    .catch(err => {
        console.log("Failedddddddddddddd");
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });  
}

module.exports = {
    create,
    retrieve,
    list,
    update,
    destroy,
    retrieveCoursePreReqs,
    retrieveCourseCoReqs
}