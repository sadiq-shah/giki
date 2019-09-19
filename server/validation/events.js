const Joi = require('joi');

module.exports = (course, update) => {
    let schema = Joi.object().keys({
      title: Joi.string().min(6).max(200).required(),
      start_date: Joi.date(),
      end_date: Joi.date(),
      thumbnail: Joi.string()
    });

    if(update) {
      schema = schema.optionalKeys("title");
    }
  
    return Joi.validate(course, schema);
  }
  