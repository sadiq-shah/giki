const Article = require("./../models").Article;
const validate = require("./../validation").Article;
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");

const create = (req,res) => {
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    req.body.page_tag_id = req.params.pageTagId;
    Article.create({
        ...req.body
    })
    .then(article => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: article});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    Article
    .findByPk(id)
    .then(article => {
        if(!article) {
            res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
        }
        else {
            res.status(statusCodes.OK).json({success:true, data: article});
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });
}

const list = (req,res) => {
    Article
    .findAll()
    .then(articles => {
        res.status(statusCodes.OK).json({ success:true, data: articles });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const update = (req,res) => {

    const {error} = validate(req.body, true);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    const id = req.params.id;
    req.body.page_tag_id = req.params.pageTagId;
    Article
    .findByPk(id)
    .then(article => {
        if(!article) {
            res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
        }
        else {

            article.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: article
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
    Article
    .findByPk(id)
    .then(article => {
        if(!article) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            article
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