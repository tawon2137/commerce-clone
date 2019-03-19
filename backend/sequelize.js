const Sequelize = require('sequelize');
const UserModel = require('./models/user');

console.log(process.env.DEV_DB_DATABASE, process.env.DEV_DB_USER, process.env.DEV_DB_PASS);
const sequelize = new Sequelize(process.env.DEV_DB_DATABASE, process.env.DEV_DB_USER, process.env.DEV_DB_PASS, {
  host: process.env.DEV_DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: 3306
});

const User = UserModel(sequelize, Sequelize);
// BlogTag will be our way of tracking relationship between Blog and Tag models
// each Blog can have multiple tags and each Tag can have multiple blogs
/*
const BlogTag = sequelize.define('blog_tag', {})
const Blog = BlogModel(sequelize, Sequelize)
const Tag = TagModel(sequelize, Sequelize)

Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
Blog.belongsTo(User);

*/

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User,
}