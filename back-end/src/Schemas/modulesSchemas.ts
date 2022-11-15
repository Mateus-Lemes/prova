import joi from "joi";

export const moduleSchema = joi.object({
    name: joi.string().required()
})