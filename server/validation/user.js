const Joi = require('joi');

module.exports = (user, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
      role_id: Joi.number().required()
    });

    if(update) {
      schema = schema.optionalKeys("name", "email", "password", "role_id");
    }
  
    return Joi.validate(user, schema);
  }
  