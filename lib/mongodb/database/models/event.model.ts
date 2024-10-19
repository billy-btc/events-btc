import mongoose, {model, models,Document, Schema} from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string; // Required
    description?: string;  // Optional
    location?: string;    // Optional
    createdAt: Date;
    imageUrl: string;       // Required
    startDateTime: Date;
    endDateTime: Date;
    price?: string;        // Optional
    isFree?: boolean;      // Optional (default: false)
    url?: string;          // Optional
    category?: {_id:string, name:string};
    organizer?: {_id:string, firstName:string, lastName:string };
}

const EventSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String},
    location: {type:String},
    createdAt: {type:Date, default:Date.now},
    imageUrl: {type:String, required:true},
    startDateTime: {type:Date, default:Date.now},
    endDateTime: {type:Date, default:Date.now},
    price: {type:String},
    isFree: {type: Boolean, default: false},
    url: {type:String},
    category: {type:Schema.Types.ObjectId, ref: 'Category'},
    organizer: {type:Schema.Types.ObjectId, ref: 'User'},
})

const Event = models.Event || model('Event', EventSchema);

export default Event;