const Sequelize = require("sequelize");
const db = require("../database/db");

const educationModel = (sequelize, Sequelize) => {
    var Education = sequelize.define(
        't_education',
        {
            educ_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            educ_title: {
                type: Sequelize.TEXT
            },
            educ_created: {
                type: Sequelize.DATE
            },
            educ_updated: {
                type: Sequelize.DATE
            },
            educ_body: {
                type: Sequelize.TEXT
            },
            educ_summary: {
                type: Sequelize.TEXT
            },
            memb_id: {
                type: Sequelize.INTEGER
            },
        },
        {
            timestamps: false
        }
    ); return Education;
};

module.exports = educationModel;