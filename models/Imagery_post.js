const Sequelize = require("sequelize");
const db = require("../database/db");

const imagery_postModel = (sequelize, Sequelize) => {
    var Imagery_post = sequelize.define(
        't_imagery_post',
        {
            post_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            post_title: {
                type: Sequelize.STRING
            },
            post_subtitle: {
                type: Sequelize.STRING
            },
            post_body: {
                type: Sequelize.TEXT
            },
            post_created: {
                type: Sequelize.DATE
            },
            post_updated: {
                type: Sequelize.DATE
            },
            post_images: {
                type: Sequelize.STRING
            },
            memb_id: {
                type: Sequelize.INTEGER
            },
        },
        {
            timestamps: false
        }
    ); return Imagery_post;
};

module.exports = imagery_postModel;