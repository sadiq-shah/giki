const Joi = require('joi');

module.exports = (page_tags, update) => {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      page_id: Joi.number().required(),
    });

    if(update) {
      schema = schema.optionalKeys("name", "page_id");
    }
  
    return Joi.validate(page_tags, schema);
  }
