const Joi = require('joi');

module.exports = (faculty, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().min(5).max(100).required(),
      dean_id: Joi.number()
    });

    if(update) {
      schema = schema.optionalKeys("name");
    }
  
    return Joi.validate(faculty, schema);
}
