import { Schema } from 'mongoose';

export const StudentSchema = new Schema({

    code: { type: Number, required: true },
    name: { type: String, required: true },
    photoURL: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});