const User = require('../Models/User');

class UserController {
    async index(req, res) {
        try {
            let users = await User.find({});
            res.json(users);
        } catch (error) {
            res.status(500).send('Error Server');
        }
    }
}

module.exports = new UserController();
