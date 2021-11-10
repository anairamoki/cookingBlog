const mongoose = require('mongoose');

// connecting to mongoose
mongoose.connect('mongodb://localhost:27017/cookingBlog'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} 

//setting up the DB logic.
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
}); 

// Models
require('./CategorySchema');
