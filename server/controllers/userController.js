const User = require("../models/User");
const mongoose = require("mongoose");

// Home Routes
exports.homepage = async (req, res) => {
    const messages = await req.flash("info");

    const locals = {
        title: "Users Data",
        description: "Users Data Management",
    };

    try {
        const users = await User.aggregate([{ $sort: { updatedAt: -1 } }]);

        res.render("index", {
            locals,
            messages,
            users,
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

// Post ADD User
exports.postUser = async (req, res) => {
    const locals = {
        title: "Add User Forms",
        description: "Users Data Management",
    };

    console.log(req.body);

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
    });

    try {
        await User.create(newUser);
        await req.flash("info", "New User has been added");

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

// GET User by _id
exports.userById = async (req, res) => {
    const locals = {
        title: "GET User data by ID",
        description: "Users Data Management",
    };

    try {
        const user = await User.findOne({ _id: req.params.id });

        res.render("user/view", {
            locals,
            user,
        });
    } catch (error) {
        console.log(error);
    }
};
