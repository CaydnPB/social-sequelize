const { db } = require("../db/connection");
const { Sequelize, DataTypes } = require("sequelize");

let like = db.define("like ", {
    reactionType: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Like;