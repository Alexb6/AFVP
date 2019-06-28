const Sequelize = require("sequelize");
const db = require("../database/db");

const paymentModel = (sequelize, Sequelize) => {
    var Payment = sequelize.define(
        't_payment',
        {
            paym_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            paym_status: {
                type: Sequelize.BOOLEAN
            },
            paym_year: {
                type: Sequelize.DATE
            },
            memb_id: {
                type: Sequelize.INTEGER
            },
        },
        {
            timestamps: false
        }
    ); return Payment;
};

module.exports = paymentModel;