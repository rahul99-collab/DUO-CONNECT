const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// Middleware setup
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and connect to the database
require('./server/config/mongoose.config');

// Import and set up routes
require('./server/routes/shoe.routes')(app);
require('./server/routes/user.routes')(app);

// Start the server
app.listen(port, () => console.log(`Server is running on port: ${port}`));
