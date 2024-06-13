import * as Joi from "joi";
const strongPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const LoginVelidation = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(60)
    .message("maximum 60 characters allowed."),
  password: Joi.string()
    .regex(strongPasswordRegex)
    .message("password pattern must be match!")
    .min(8)
    .message("minimum 8 characters required.")
    .max(16)
    .message("maximum 16 characters allowed."),
}).required();
