require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


// connecting to mongoose
mongoose
	.connect(process.env.MONGODB, { useNewUrlParser: true })
	.then(() => {

        console.log(`MongoDB connected`);
        
		const app = express();

        const PORT = process.env.PORT || 5000;

		app.listen(5000, () => {
			console.log(`Server listening on port ${PORT}`);
		})
	});