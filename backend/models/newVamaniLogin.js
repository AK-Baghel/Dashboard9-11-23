import mongoose from "mongoose";

const vamaniLoginSchema = new mongoose.Schema({
    login: {
        type: String,
    },
    password: {
        type: String,
    }

});

export default mongoose.model("newVamaniLoginData", vamaniLoginSchema);