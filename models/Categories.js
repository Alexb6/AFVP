const Sequelize = require("sequelize");
const db = require("../database/db");

const categoriesModel = (sequelize, Sequelize) => {
    var Categorie = sequelize.define(
        't_categories',
        {
            cate_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            cate_type: {
                type: Sequelize.STRING
            },
        },
        {
            timestamps: false
        }
    ); return Categorie;
};

module.exports = categoriesModel;