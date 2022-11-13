import joi from "joi";

export const signupSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    passwordConfirmed: joi.ref("password")
})

export const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
})