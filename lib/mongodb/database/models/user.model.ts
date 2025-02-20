import {model, models, Schema, Document} from 'mongoose';

export interface IUser extends Document {
    clerkId: string; // Required, unique
    email: string; // Required, unique
    username: string; // Required, unique
    firstName: string; // Required
    lastName: string; // Required
    photo: string; // Required
}

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true},
})

const User = models.User || model('User', UserSchema);

export default User;