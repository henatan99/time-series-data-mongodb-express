import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express();

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database connected");
});

// Routes 
import todoRoutes from "./routes/todo.js";

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