require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./server/config/dbConfig");

const app = express();
const port = 5000 || process.env.PORT;

// Connect to Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("index");
// });

// Routes
app.use("/", require("./server/routes/userRoute"));

app.get("*", (req, res) => {
    res.status(404).json({
        message: "404",
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
