const mongoose = require("mongoose");

const AttendeeSchema = mongoose.Schema({
	stuff: String,
});

module.exports = mongoose.model("Attendee", AttendeeSchema);