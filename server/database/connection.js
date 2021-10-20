// import  mongoose  from "mongoose";

// export default async()=>{
//     await mongoose.connect("mongodb+srv://anoushka:12345@shapeai.skhrv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
       
//     }).then(console.log("connection working"))
// };



import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(process.env.MONGO_URL, {}).then(console.log("connection working"));
};