const Joi = require('joi');

module.exports = (faculty_image) => {
    const schema = {
      name: Joi.string().required(),
      faculty_id: Joi.number().required(),
    }
  
    return Joi.validate(faculty_image, schema);
  }
