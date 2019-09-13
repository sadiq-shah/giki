const Joi = require('joi');

module.exports = (faculty, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      image: Joi.string().required(),
      content: Joi.string()
    });

    if(update) {
      schema = schema.optionalKeys("name","image");
    }
  
    return Joi.validate(faculty, schema);
}
