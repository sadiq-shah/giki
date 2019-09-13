const Joi = require('joi');

module.exports = (faculty_image, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      faculty_id: Joi.number().required(),
    });

    if(update) {
      schema = schema.optionalKeys("name", "faculty_id");
    }
  
    return Joi.validate(faculty_image, schema);
  }
