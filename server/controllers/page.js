const Page = require("./../models").Page;
const validate = require("./../validation").Page;
const messages = require("./../constants/messages");
const statusCodes = require("./../constants/statusCodes");
const { toSlug } = require("./../functions/helpers");

const create = (req,res) => {
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success:false, err: error.details[0].message});

    Page.create({
        ...req.body,
        slug: toSlug(req.body.name)
    })  
    .then(page => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: page});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    Page.findByPk(id)
            .then(page => {
                if(!page) {
                    res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
                }
                else {
                    res.status(statusCodes.OK).json({success:true, data: page});
                }
            })
            .catch(err => {
                res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
            });
}

const list = (req,res) => {
    Page.findAll()
            .then(pages => {
                res.status(statusCodes.OK).json({
                    success:true,
                    data: pages
                });
            })
            .catch((err) => {
                res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
            });
}

const update = (req,res) => {

    const {error} = validate(req.body, true);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    const id = req.params.id;
    Page.findByPk(id)
            .then(page => {
                if(!page) {
                    res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
                }
                else {

                    page.update(
                        req.body,{
                        fields: Object.keys(req.body)
                    })
                    .then(() => {
                        res.status(statusCodes.OK).json({
                            success: true,
                            message: messages.ResourceUpdated,
                            data: page
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
    Page.findByPk(id)
            .then(page => {
                if(!page) {
                    res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
                }
                else {
                page.destroy()
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