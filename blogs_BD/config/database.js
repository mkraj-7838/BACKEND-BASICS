const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("Issues in DB Connection");
        console.error(error.message);
        process.exit(1);  // Exit process with failure
    } );
}

module.exports = dbConnect;