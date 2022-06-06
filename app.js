require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Routes 
const todoRoutes = require("./routes/todo");

// DB Connection
mongoose
    .connect(process.env.DATABSE, {
        userNewUrlParser: true,
        userUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB CONNECTED");
    })

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("./api", todoRoutes);

// PORT 
const PORT = process.env.PORT || 8181;

// Staring a server
app.listen(PORT, () => console.log(`Server running at ${PORT}`));