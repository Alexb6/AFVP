const Sequelize = require("sequelize");
const db = require("../database/db");

const imageryModel = (sequelize, Sequelize) => {
    var Imagery = sequelize.define(
        't_imagery',
        {
            imag_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            imag_title: {
                type: Sequelize.STRING
            },
            imag_body: {
                type: Sequelize.TEXT
            },
            imag_path: {
                type: Sequelize.STRING
            },
            post_id: {
                type: Sequelize.INTEGER
            },
        },
        {
            timestamps: false
        }
    ); return Imagery;
};

module.exports = imageryModel;