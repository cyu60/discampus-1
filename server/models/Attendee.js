const mongoose = require("mongoose");
const { Schema } = mongoose;

const attendeeSchema = Schema ({
	// email: {
	// 	type: String, 
	// 	required: true,
	// 	lowercase: true
	// },
	phoneNumber: String,
	interests: {
		type: [String], 
		required: true
	},
	major: {
		type: String,
		required: true
	},
	year: {
		type: Number,
		required: true
	}
});

const Event = mongoose.model("Attendee", attendeeSchema);
module.exports = Event;