const mongoose = require("mongoose");

//creating database
mongoose.connect("mongodb://localhost:27017/Contact-Us" , {
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
