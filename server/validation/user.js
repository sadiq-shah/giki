const Joi = require('joi');

module.exports = (user) => {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
      role_id: Joi.number().required()
    }
  
    return Joi.validate(user, schema);
  }
  