const Joi = require('joi');

module.exports = (faculty) => {
    const schema = {
      name: Joi.string().min(5).max(100).required(),
      slug: Joi.string().min(5).max(120)
    }
  
    return Joi.validate(faculty, schema);
}
