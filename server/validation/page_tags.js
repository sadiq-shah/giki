const Joi = require('joi');

module.exports = (page_tags, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required()
    });

    if(update) {
      schema = schema.optionalKeys("name");
    }
  
    return Joi.validate(page_tags, schema);
  }
