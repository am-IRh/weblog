const path = require("path");

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const dotEnv = require("dotenv");

const indexRouter = require("./router");
const connectDB = require("./config/database");

//* load config 
dotEnv.config({path: "./config/config.env"});

//* database connection
connectDB();

const app = express();


//* Views engine
app.use(expressLayout);
app.set("layout", "./layout/mainLayout")

app.set("view engine", "ejs");
app.set("views", "views");

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes 
app.use(indexRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`server is running ${process.env.NODE_ENV} MODE on port ${PORT}`));
