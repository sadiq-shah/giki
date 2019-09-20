const Joi = require('joi');

module.exports = (faculty_image, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required()
    });

    if(update) {
      schema = schema.optionalKeys("name");
    }
  
    return Joi.validate(faculty_image, schema);
  }
