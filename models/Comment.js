const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

let comment = db.define("comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Comment;