import mongoose from mongoose;

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : String,

    email : String,
    role : {
        type : String,
        enum : ["tenant" , "owner"]
    }
});