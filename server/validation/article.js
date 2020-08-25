const Joi = require('joi');

module.exports = (article, update) => {
    let schema = Joi.object().keys({
      heading: Joi.string().min(5).max(100).required(),
      content: Joi.string().required()
    });

    if(update) {
      schema = schema.optionalKeys("heading","content");
    }
  
    return Joi.validate(article, schema);
  }
