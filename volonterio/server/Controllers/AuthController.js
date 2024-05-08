const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../Models/User');

class AuthController {
    async register(req, res) {
        const { name, email, password, surname } = req.body;
        const file = req.uploadedFileName || ''; 
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        const passwordHashed = await bcrypt.hash(password, salt);

        User.create({ name: `${name}`, surname: `${surname}`, email: `${email}`, password: `${passwordHashed}`, file });
        res.send(`Signed up with email: ${email}`);
    }

    async login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const user = await User.findOne({ email: email.trim() });

        try {
            console.log(email)
            if (!user) {
                return res.status(404).send('User not found');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).send('Invalid credentials');
            }

            req.session.userId = user.id; 
            res.send(`Logged in successfully as ${user.name}`);
        } catch (error) {
            res.status(500).send('Login error: ' + error.message);
        }

    }
}

module.exports = new AuthController();
