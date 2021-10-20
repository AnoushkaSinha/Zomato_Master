import jwtPassport from "passport-jwt";

//database Model
import { UserModel } from "../database/user";

const JwtStrategy =jwtPassport.Strategy;
const ExtractJwt =jwtPassport.ExtractJwt;

const Options ={
     jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey:"ZomatoApp"
};


export default(passport)=>{
    passport.use(
        new JwtStrategy(Options,async(jwt_payload,done)=>{
            try{
                const doesUserExist=UserModel.findById(jwt_payload.user);
                if(!doesUserExist) return done(null,false);

                return  done (null,doesUserExist);
            } catch(error){
                throw new Error (error);
            }
        })
    );
};