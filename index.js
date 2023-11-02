const { Comment, Like, Post, Profile, User } = require("./models/index");

User.hasOne(Profile);
Profile.belongsTo(User);

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

User.hasMany(Like);
Like.hasMany(User);

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}