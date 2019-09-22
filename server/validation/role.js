const Joi = require('joi');

module.exports = (role, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      
    });

    if(update) {
      schema = schema.optionalKeys("name");
    }
  
    return Joi.validate(role, schema);
}
