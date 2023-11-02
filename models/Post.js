const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

let post = db.define("post", {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Post;