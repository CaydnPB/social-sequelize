const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

let User = db.define("user", {
    username: DataTypes.STRING,
    email: DataTypes.STRING
})

module.exports = User;