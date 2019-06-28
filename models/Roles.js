const Sequelize = require("sequelize");
const db = require("../database/db");

const rolesModel = (sequelize, Sequelize) => {
    var Roles = sequelize.define(
        't_imagery',
        {
            role_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            role_type: {
                type: Sequelize.ENUM('adherent', 'moderateur', 'administrateur', 'superadministrateur')
            },
        },
        {
            timestamps: false
        }
    ); return Roles;
};

module.exports = rolesModel;