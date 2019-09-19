const Joi = require('joi');

module.exports = (faculty_member, update) => {
    let schema = Joi.object().keys({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
      name: Joi.string().min(5).max(50).required(),
      designation: Joi.string().required(),
      contact_details: Joi.string(),
      faculty_status: Joi.string(),
    });

    if(update) {
      schema = schema.optionalKeys("email", "password", "name", "designation");
    }
  
    return Joi.validate(faculty_member, schema);
  }
  