module.exports = function (app) {
    var memberController = require('../controllers/memberController');

    app.route('/tovalidate')
        .post(memberController.tovalidate);

    app.route('/login')
        .post(memberController.login);

    app.route('/memberstovalidate')
        .get(memberController.memberstovalidate);

    app.route('/permission')
        .post(memberController.permissions);

}