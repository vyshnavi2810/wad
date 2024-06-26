const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 2000;
const mongooseConnection = require('./db/config'); // Assuming your config file is in ./db/config.js

// Middleware
app.use(express.json());
app.use(cors());

const config = require("./db/config");
const Home = require("./controllers/controller");
const LoginRoute = require("./routes/LoginRoute");
const RegisterRoute = require("./routes/RegisterRoute");
const verifyToken = require("./Middleware/middleware");
const RecipeRoute = require("./routes/RecipeRoute");
const ForgotPassword = require("./routes/forgotPassword");

app.use('/auth', LoginRoute);
app.use('/auth', RegisterRoute);
app.use('/auth', RecipeRoute);
// app.use('/auth', route);
app.use('/auth', ForgotPassword);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
