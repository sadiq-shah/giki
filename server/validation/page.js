const Joi = require('joi');

module.exports = (faculty, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      slug: Joi.string().required(),
      image: Joi.string().required(),
      content: Joi.string()
    });

    if(update) {
      schema = schema.optionalKeys("name","slug","image");
    }
  
    return Joi.validate(faculty, schema);
}
