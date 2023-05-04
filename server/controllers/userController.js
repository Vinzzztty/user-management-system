const User = require("../models/User");
const mongoose = require("mongoose");

// Home Routes
exports.homepage = async (req, res) => {
    const locals = {
        title: "Users Data",
        description: "Users Data Management",
    };

    try {
        res.render("index", {
            locals,
        });
    } catch (error) {
        console.log(error);
    }
};

// Add User forms
exports.addUser = async (req, res) => {
    const locals = {
        title: "Add User Forms",
        description: "Users Data Management",
    };

    try {
        res.render("user/add", { locals });
    } catch (error) {
        console.log(error);
    }
};
