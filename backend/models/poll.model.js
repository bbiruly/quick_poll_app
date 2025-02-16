import mongoose from "mongoose";

const pollSchema = new mongoose.Schema({
    question: String,
    options: [{ text: String, votes: { type: Number, default: 0 } }]
});


export const Poll = mongoose.model("Poll", pollSchema);