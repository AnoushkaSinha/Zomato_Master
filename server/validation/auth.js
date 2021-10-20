import joi, { string } from "joi";

export const ValidateSignup =(userData)=>{

    const Schema =joi.object({
        fullname: joi.String().required().min(4),
        email: joi.String().email(),
        password: joi.String().min(5),
        address: joi.array().items(joi.object({detail:joi.string(),for:joi.String()})),
        phoneNumber:joi.number()
    
    })
return Schema.validateAsync(userData);
};
export const ValidateSignin =(userData)=>{

    const Schema =joi.object({
        
        email: joi.String().email().required(),
        password: joi.String().min(5).required(),
        
            });

    return Schema.validateAsync(userData);
    };

