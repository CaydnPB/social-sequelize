const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

let profile = db.define("profile", {
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING
})

module.exports = Profile;