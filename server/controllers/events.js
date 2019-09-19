const Event = require("./../models").Event;
const validate = require("./../validation").Event;
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");
const { toSlug } = require("./../functions/helpers");
const create = (req,res) => {
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    req.body.slug = toSlug(req.body.title);
    Event.create({
        ...req.body
    })
    .then(event => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: event});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    Event
    .findByPk(id)
    .then(event => {
        if(!event) {
            res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
        }
        else {
            res.status(statusCodes.OK).json({success:true, data: event});
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });
}

const list = (req,res) => {
    Event
    .findAll()
    .then(events => {
        res.status(statusCodes.OK).json({ success:true, data: events });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const update = (req,res) => {

    const {error} = validate(req.body, true);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    const id = req.params.id;
    Event
    .findByPk(id)
    .then(event => {
        if(!event) {
            res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
        }
        else {
            event.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: event
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
        res.status(statusCodes.BAD_REQUEST).json({
            success: false,
            err: err
        })
    })
}

const destroy = (req,res) => {
    const id = req.params.id;
    Event
    .findByPk(id)
    .then(event => {
        if(!event) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            event
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