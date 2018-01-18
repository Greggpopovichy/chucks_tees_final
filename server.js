const express = require("express");
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const routes = require("routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/chucks_tees",
    {
        useMongoClient: true
    }
);

// Send every request to the React app
// Define any API routes before this runs

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});