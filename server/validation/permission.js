const Joi = require('joi');

module.exports = (role, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      role_id: Joi.number().required()
    });

    if(update) {
      schema = schema.optionalKeys("name");
    }
  
    return Joi.validate(role, schema);
}
