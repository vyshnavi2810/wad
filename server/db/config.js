// const mongoose = require("mongoose");
// mongoose
//   .connect(process.env.URI)
//   .then(() => {
//     console.log("Connected to the database");
//   })
//   .catch((error) => {
//     console.error("Error connecting to the database:", error);
//   });/

// config.js
require('dotenv').config();
const mongoose = require('mongoose');

console.log('MONGODB_URI:', process.env.MONGODB_URI); // Debugging statement

const dbUri = process.env.MONGODB_URI;

if (!dbUri) {
  console.error('MONGODB_URI environment variable not defined');
  process.exit(1);
}

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error('Error connecting to the database:', err));

