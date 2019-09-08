const Joi = require('joi');

module.exports = function validate(faculty_member) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
      name: Joi.string().min(5).max(50).required(),
      designation: Joi.string().required(),
      contact_details: Joi.string(),
      faculty_status: Joi.string(),
      faculty_id: Joi.number().required()
    }
  
    return Joi.validate(faculty_member, schema);
  }
  