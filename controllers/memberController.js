const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const secureKey = require('../config/secureKey');

const db = require('../database/db');
const Sequelize = require('sequelize');
const memberModel = require('../models/Members');
const Members = memberModel(db.sequelize, Sequelize);


// Define member's subscription infos to validate method
exports.tovalidate = function (req, res) {
    const today = new Date();
    const userData = {
        memb_firstname: req.body.memb_firstname,
        memb_name: req.body.memb_name,
        memb_email: req.body.memb_email,
        memb_password: req.body.memb_password,
        memb_duty: req.body.memb_duty,
        memb_subsdate: today,
        memb_bio: req.body.memb_bio,
        memb_hospital: req.body.memb_hospital,
        memb_function: req.body.memb_function,
        memb_photo: req.body.memb_photo,
        memb_city: req.body.memb_city,
        memb_degree: req.body.memb_degree
    };

    Members.findOne({
        where: {
            memb_email: req.body.memb_email
        }
    })
        .then(user => {

            if (!user) {
                bcrypt.hash(req.body.memb_password, 10, (err, hash) => {
                    userData.memb_password = hash
                    Members.create(userData)
                        .then(user => {
                            res.json({ status: user.memb_name + ' tovalidate' })
                        })
                        .catch(err => {
                            res.json({ error: err })
                        })
                })

            } else {
                res.json({ error: "User already exists" })

            }
        })
        .catch(err => {
            res.json({ error: err })
        })
}


// Define member's login method
exports.login = function (req, res) {
    Members.findOne({
        where: {
            memb_email: req.body.memb_email
        }
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.memb_password, user.dataValues.memb_password)) {
                    let token = jwt.sign(user.dataValues, secureKey.secret, {
                        expiresIn: 1440
                    });

                    res.send({ token: token, user: user });
                }
            } else {
                res.status(400).json({ error: 'User does not exist' });
            }
        })
        .catch(err => {
            res.status(400).json({ error: err });
        })
}


// Define the method to display all the members to be validated by an admin
exports.memberstovalidate = function (req, res) {
    Members.findAll({
        where: {
            memb_status: 'tovalidate'
        }
    })
        .then(user => {
            console.log(user);

            if (user) {
                res.status(200).json(user)
            } else {
                res.status(400).json({ error: 'User does not exist' });
            }
        })
        .catch(err => {
            res.status(400).json({ error: err });
        })
}


// Define the method to check the right token
exports.permissions = function (req, res) {
    jwt.verify(req.body.token, secureKey.secret, function (err, decoded) {

        if (err) {
            res.json({ permission: false })
        } else {
            res.json({ permission: true })
        }
    });

}


// Define the method to validate the member's subscription
exports.validatemember = function (req, res) {
    Members.update({ memb_status: 'inregistration' }, { id: req.body.id })
        .then(user => {

        })
}