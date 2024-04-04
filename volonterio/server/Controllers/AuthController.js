const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../Models/User');

class AuthController {
    async register(req, res) {
        const { name, email, password, surname } = req.body;
        // console.log(email, password, name, confirmedPassword); 
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash('qwerty', salt);

        User.create({ name: `${name}`, surname: `${surname}`, email: `${email}`, password: `${passwordHashed}` });
        res.send(`Signed up with email: ${email}`);
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
