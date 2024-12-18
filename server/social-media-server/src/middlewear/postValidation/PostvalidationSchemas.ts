import Joi from "joi";

export const postSchema = Joi.object({
    postTitle: Joi.string().required(),
    postDescription: Joi.string().required(),
    postTitleColor: Joi.string().required(),
    postComments: Joi.array().items(Joi.string()).optional(),
  });


