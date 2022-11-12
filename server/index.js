require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const events = require("./routes/events");
const verification = require("./routes/verification");





mongoose
	.connect(process.env.MONGODB, { useNewUrlParser: true })
	.then(() => {

        console.log(`MongoDB connected`);
        
		const app = express();
		app.use(express.json())
		app.use(express.urlencoded({extended: true}));
		app.use(express.json()); 
		app.use(cors());
		app.use("/api", events)
		app.use("/api", verification)



        const PORT = process.env.PORT || 5000;

		app.listen(5000, () => {
			console.log(`Server listening on port ${PORT}`);
		})
	});