require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./server/config/dbConfig");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();
const port = 5000 || process.env.PORT;

// Connect to Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static("public"));

// Express Session
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        },
    })
);

// Flash Messages
app.use(flash({ sessionKeyName: "flashMessage" }));

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
