const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require ('cors');
const app = express();
const router = require("./routes/book-routes");

// Middleware
/*//==================================================\\
    Handles all the different routers, by making sure it 
        goes through auth
*/
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.use("/books", router); 
app.use("/approve", router);
app.use("/users", router);
app.use("/update", router);
app.use("/delete/:id", router);
app.use("/auth", require("./routes/user-routes"));
//app.use("/customer", require("./routes/customer-routes"));
/*//==================================================\\
    connecting to mongo d database
*/
mongoose.connect(
    "mongodb+srv://admin:hwTUqBZ3IdF68Wks@cluster0.xrw7m.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected To Database"))
    .then(()=> {
        app.listen(5000);
    }).catch((err)=>console.log(err));
//hwTUqBZ3IdF68Wks