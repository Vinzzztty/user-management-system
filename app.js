const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Templating Engine
app.use(expressLayout);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.json({
        message: "Halo",
    });
});

app.get("*", (req, res) => {
    res.status(404).json({
        message: "404",
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
