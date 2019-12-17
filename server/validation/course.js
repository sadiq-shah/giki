const Joi = require('joi');

module.exports = (course, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().min(5).max(50).required(),
      code: Joi.string().min(5).max(50).required(),
      description: Joi.string().min(5).required(),
      lecture_hours: Joi.number().required(),
      lab_hours: Joi.number().required(),
      credit_hours: Joi.number().required(),
      faculty_id: Joi.number().required()
    });

    if(update) {
      schema = schema.optionalKeys("name", "code", "description", "lecture_hours", "lab_hours", "credit_hours");
    }
  
    return Joi.validate(course, schema);
  }
  