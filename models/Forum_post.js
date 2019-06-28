const Sequelize = require("sequelize");
const db = require("../database/db");

const forum_postModel = (sequelize, Sequelize) => {
    var Forum_post = sequelize.define(
        't_forum_post',
        {
            foru_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            foru_title: {
                type: Sequelize.STRING
            },
            foru_body: {
                type: Sequelize.TEXT
            },
            foru_status: {
                type: Sequelize.ENUM('approved', 'rejected', 'inreview')
            },
            foru_idparent: {
                type: Sequelize.INTEGER
            },
            foru_date: {
                type: Sequelize.DATE
            },
            foru_update: {
                type: Sequelize.DATE
            },
            cat_id: {
                type: Sequelize.INTEGER
            },
            memb_id: {
                type: Sequelize.INTEGER
            },
            memb_idmoderateur: {
                type: Sequelize.INTEGER
            },
        },
        {
            timestamps: false
        }
    ); return Forum_post;
};

module.exports = forum_postModel;