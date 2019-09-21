const PageTags = require("./../models").Page_Tags;
const Article = require("./../models").Article;
const validate = require("./../validation").Page_Tags;
const statusCodes = require("./../constants/statusCodes");
const messages = require("./../constants/messages");

const create = (req,res) => {
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    req.body.page_id = req.params.pageId;
    PageTags.create({
        ...req.body
    })
    .then(pagetags => {
        res.status(statusCodes.CREATED).json({success: true, message: messages.ResourceCreated, data: pagetags});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success:true, err:err});
    });    
}

const retrieve = (req,res) => {
    const id = req.params.id;
    PageTags
    .findByPk(id)
    .then(pagetags => {
        if(!pagetags) {
            res.status(statusCodes.NOT_FOUND).json({success:true, message: messages.ResourceNotFound})
        }
        else {
            res.status(statusCodes.OK).json({success:true, data: pagetags});
        }
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });
}

const list = (req,res) => {
    PageTags
    .findAll()
    .then(pagetags => {
        res.status(statusCodes.OK).json({ success:true, data: pagetags });
    })
    .catch((err) => {
        res.status(statusCodes.BAD_REQUEST).json({success:false,err:err});
    });
}

const update = (req,res) => {

    const {error} = validate(req.body, true);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});

    const id = req.params.id;
    req.body.page_id = req.params.pageId;
    PageTags
    .findByPk(id)
    .then(pagetag => {
        if(!pagetag) {
            res.status(statusCodes.NOT_FOUND).json({success: true, message: messages.ResourceNotFound});
        }
        else {
            pagetag.update( req.body,{fields: Object.keys(req.body) })
            .then(() => {
                res.status(statusCodes.OK).json({
                    success: true,
                    message: messages.ResourceUpdated,
                    data: pagetag
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
    PageTags
    .findByPk(id)
    .then(pagetag => {
        if(!pagetag) {
            res.status(statusCodes.NOT_FOUND).json({success: false, message: messages.ResourceNotFound});
        }
        else {
            pagetag
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

const retrieveArticles = (req,res) => {
    const id = req.params.pageTagId;  
    console.log(`Id = ${id}`);
    PageTags
    .findByPk(id,{
        include: [{
            model: Article,
            as: "articles"
        }]
    })
    .then(articles => {
        res.status(statusCodes.OK).json({success: true, data: articles});
    })
    .catch(err => {
        res.status(statusCodes.BAD_REQUEST).json({success: false, err: err});
    });  
}

module.exports = {
    create,
    retrieve,
    list,
    update,
    destroy,
    retrieveArticles
}