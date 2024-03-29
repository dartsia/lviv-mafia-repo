const { validationResult } = require('express-validator');
const User = require('../Models/User');

class AuthController {
    register(req, res) {
        const { name, email, password, confirmedPassword, surname } = req.body;
        // console.log(email, password, name, confirmedPassword); 
        
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        User.create({ name: `${name}`, surname: `${surname}`, email: `${email}`, password: `${password}` });
        res.send(`Signed up with email: ${email}`);
    }

    loginStore(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        //User.create({ name: `${email}`, age: `${password}` });

        res.send(`Okey`);
    }
}

module.exports = new AuthController();
