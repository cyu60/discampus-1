const mongoose = require("mongoose");
const { Schema } = mongoose;


const eventSchema = Schema({
	email: {
		type: String,
		required: true
	},
	campusGroupsLink: {
		type: String, 
		required: true,
	},
	eventName: {
		type: String,
		required: true,
	},
	orgName: {

	}, 
	years: {},
	majors: {},
	categories: {},
	img: {
        data: Buffer,
        contentType: String
    },
	desctiption: {
		type: String,
	},
	mailingList: {

	}

});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;