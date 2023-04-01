import { Model, Schema, Types, model } from "mongoose";
import { Sub } from "./sub.interface";

const SubSchema = new Schema<Sub>(
    {
        nick: String,
        avatar: String,
        subMonths: Number,
        age: Number,
        description: String
    }
);

const SubModel = model('subs', SubSchema);

export default SubModel;