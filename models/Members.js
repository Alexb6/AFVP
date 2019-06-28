const Sequelize = require("sequelize");
const db = require("../database/db");

const membersModel = (sequelize, Sequelize) => {
    var Members = sequelize.define(
        't_members',
        {
            memb_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            memb_name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Veuillez entrer votre nom.'
                    }
                }
            },
            memb_firstname: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Veuillez entrer votre prénom.'
                    }
                }
            },
            memb_email: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Veuillez entrer votre email.'
                    }
                }
            },
            memb_password: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Veuillez entrer votre mot de passe.'
                    }
                }
            },
            memb_duty: {
                type: Sequelize.STRING
            },
            memb_subsdate: {
                type: Sequelize.DATE
            },
            memb_uptodate: {
                type: Sequelize.DATE
            },
            memb_banned: {
                type: Sequelize.BOOLEAN
            },
            memb_status: {
                type: Sequelize.ENUM('registered', 'inregistration', 'tovalidate', 'rejected')
            },
            memb_bio: {
                type: Sequelize.TEXT
            },
            memb_hospital: {
                type: Sequelize.STRING
            },
            memb_function: {
                type: Sequelize.STRING
            },
            memb_photo: {
                type: Sequelize.STRING
            },
            memb_city: {
                type: Sequelize.STRING
            },
            memb_degree: {
                type: Sequelize.STRING
            },
            role_id: {
                type: Sequelize.INTEGER
            },
        },
        {
            timestamps: false
        }
    ); return Members;
};

module.exports = membersModel;