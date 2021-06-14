const mongoose = require("mongoose");
const Img = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    Image: {
        type: String
    }
}, { timestamps: true });
mongoose.model("Img", Img);