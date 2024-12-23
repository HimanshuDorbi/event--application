import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  city: string;
  date: Date;
  domain: string;
  capacity: number;
  enrolled: number;
  author: mongoose.Schema.Types.ObjectId;
}

const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    city: { type: String, required: true },
    date: { type: Date, required: true },
    domain: { type: String, required: true },
    capacity: { type: Number, required: true },
    enrolled: { type: Number, default: 0 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>('Event', EventSchema);
