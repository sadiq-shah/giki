const Permission= require('../models').Permission;
const messages = require("./../constants/messages");
const statusCodes = require("./../constants/statusCodes");
const validate = require("./../validation").Permission;


const create=(req,res)=>{
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});
    Permission.create({
        ...req.body,
    }).then(permission=>{
        res.status(statusCodes.OK).json({
            success:true,
            message:messages.ResourceCreated,
            data:permission
        });
    }).catch(err=>{
        res.status(statusCodes.BAD_REQUEST).json({
            success:false,
            err:err
        });
    })

}

const retrieve=(req,res)=>{
    const id=req.params.id;
    Permission.findByPk(id)
        .then(permission=>{
            if(permission){
                res.status(statusCodes.OK).json({
                    success:true,
                    data:permission

                })
            }else{
                res.status(statusCodes.NOT_FOUND).json({
                    success:false,
                    message:messages.ResourceNotFound
                })
            }
        }).catch(err=>{
            res.status(statusCodes.BAD_REQUEST).json({

                success:false,
                err:err
            })
        })
}

const update=(req,res)=>{
    const {error} = validate(req.body, false);
    if(error) return res.status(statusCodes.BAD_REQUEST).json({success: false, err: error.details[0].message});
    const id=req.params.id;
    Permission.findByPk(id).then(permission=>{
        
        if(permission){
            permission.update(req.body).then(result=>{
                return res.status(statusCodes.OK).json({
                    success:true,
                    message:messages.ResourceUpdated,
                    data:result
                })
            });

        }else{
            res.status(statusCodes.NOT_FOUND).json({
                success:false,
                message:messages.ResourceNotFound,
            })

        }
        
    }).catch(err=>{
        res.status(statusCodes.BAD_REQUEST).json({
            success:false,
            err:err
        })
    })
}

const destroy=(req,res)=>{
    const id=req.params.id;
    Permission.findByPk(id).then(permission=>{
        if(permission){
            permission.destroy().then(()=>{
                res.status(statusCodes.OK).json({
                    success:true,
                    message:messages.ResourceDestroyed
                })
            })
        }else{
            res.status(statusCodes.NOT_FOUND).json({
                success:false,
                message:messages.ResourceNotFound
            })
        }
    })
}

module.exports={
    create,
    update,
    retrieve,
    destroy
}