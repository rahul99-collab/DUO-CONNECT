const mongoose = require('mongoose');

// MongoDB connection string
const dbURI = "mongodb+srv://rahulsahu7929:<TY6Om3ES0zqjvpJU>@cluster0.ov9wb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Set Mongoose options
mongoose.set('strictQuery', false); // Adjust as needed

// Connect to MongoDB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Ensures TLS is used for MongoDB Atlas
})
    .then(() => console.log("Successfully connected to the MongoDB database"))
    .catch(err => {
        console.error("Error connecting to the MongoDB database", err);
    });

// Optional: Debugging and connection events
mongoose.connection.on('connected', () => {
    console.log("Mongoose connected to MongoDB.");
});

mongoose.connection.on('error', (err) => {
    console.error("Mongoose connection error:", err);
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose disconnected from MongoDB.");
});

module.exports = mongoose;
