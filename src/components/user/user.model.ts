import { Schema, model } from 'mongoose';

const Recipient = new Schema({
    rut: {type: String, required: [true, 'rut recipient required']},
    name: {type: String, required: [true, 'name recipient required']},
    email: {type: String, required: [true, 'email recipient required']},
    phone: Number,
    bank: {type: String, required: [true, 'bank recipient required']},
    account_type: {type: String, required: [true, 'account_type recipient required']},
    account_number: {type: Number, required: [true, 'account_number recipient required']}
});

export const User = new Schema({
    rut: {type: String, required: [true, 'rut user required']},
    username: {type: String, required: [true, 'username required']},
    name: {type: String, required: [true, 'name user required']},
    email: {type: String, required: [true, 'email user required']},
    recipient: [Recipient]
    
});

User.index( { rut: 1 }, { unique: true } );
User.index( { username: 1 }, { unique: true } );


const users = model("users", User);
export default users;