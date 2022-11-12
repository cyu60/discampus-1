import {Schema, model, connect} from 'mongoose';

interface IAttendee {
	email: string;
	interests: string[]
	phone?: number;
	major: string;
	year: number;
}

const AttendeeSchema = new Schema<IAttendee>({
	email: {type: String, required: true},
	interests: {type: [String], required: true},
	phone: Number,
	major: {type: String, required: true},
	year: {type: Number, required: true}
});

export const User = model<IAttendee>("Attendee", AttendeeSchema);