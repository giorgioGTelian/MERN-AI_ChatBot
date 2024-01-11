import mongoose from "mongoose";
import { randomUUID } from "crypto";
import { escape } from "querystring";

const chatSchema = new mongoose.Schema({
    id : {type: String, default: randomUUID, required: true},
    name: {String, required: true},
    role : {type: String, enum: ["group", "private"], required: true},
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: "Message"}]
    });

const userSchema = new mongoose.Schema({
    name: {String, required: true},
    email: {String, required: true, unique: true},
    password: {String, required: true},
    chats: [chatSchema]
    });

export default mongoose.model("User", userSchema);