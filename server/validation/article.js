const Joi = require('joi');

module.exports = (article, update) => {
    let schema = Joi.object().keys({
      heading: Joi.string().min(5).max(100).required(),
      content: Joi.string().required(),
      page_tag_id: Joi.number().required(),
    });

    if(update) {
      schema = schema.optionalKeys("heading","content","page_tag_id");
    }
  
    return Joi.validate(article, schema);
  }
