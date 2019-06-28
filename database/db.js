const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("afvpbdd", "adherent", "adheAfvp06", {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        underscored: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// List of models.table
db.t_categories = require('../models/Categories')(sequelize, Sequelize);
db.t_education = require('../models/Education')(sequelize, Sequelize);
db.t_forum_post = require('../models/Forum_post')(sequelize, Sequelize);
db.t_imagery = require('../models/Imagery')(sequelize, Sequelize);
db.t_imagery_post = require('../models/Imagery_post')(sequelize, Sequelize);
db.t_members = require('../models/Members')(sequelize, Sequelize);
db.t_payment = require('../models/Payment')(sequelize, Sequelize);
db.t_roles = require('../models/Roles')(sequelize, Sequelize);

// Relations
db.t_members.belongsTo(db.t_roles);
db.t_roles.hasOne(db.t_members);

db.t_education.belongsTo(db.t_members);
db.t_members.hasMany(db.t_education);

db.t_imagery.belongsTo(db.t_imagery_post);
db.t_imagery_post.hasMany(db.t_imagery);

db.t_forum_post.belongsTo(db.t_members);
db.t_members.hasMany(db.t_forum_post);

db.t_payment.belongsTo(db.t_members);
db.t_members.hasMany(db.t_payment);

db.t_forum_post.belongsTo(db.t_members);
db.t_members.hasMany(db.t_forum_post);

db.t_forum_post.belongsTo(db.t_categories);
db.t_categories.hasMany(db.t_forum_post);

module.exports = db;