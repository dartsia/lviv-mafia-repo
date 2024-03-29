const { validationResult } = require('express-validator');
const User = require('../Models/User');

class AuthController {
    register(req, res) {

        res.send(`${req}`);
    }

    loginStore(req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        User.create({ name: `${email}`, age: `${password}` });

        res.send(`Okey`);
    }
}

module.exports = new AuthController();
