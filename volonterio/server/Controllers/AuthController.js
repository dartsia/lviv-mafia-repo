const { validationResult } = require('express-validator');
<<<<<<< Updated upstream
const User = require('../Models/User');

class AuthController {
    register(req, res) {

        res.send(`${req}`);
    }

    loginStore(req, res) {
=======

class AuthController {
    register(req, res) {
        const { name, email, password, confirmedPassword, surname } = req.body;
        // console.log(email, password, name, confirmedPassword); 
        
>>>>>>> Stashed changes
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.send(`Signed up with email: ${email}`);
    }

    loginStore(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
<<<<<<< Updated upstream

        User.create({ name: `${email}`, age: `${password}` });

        res.send(`Okey`);
=======
        console.log(email, password); 


        res.send(`Logged in with email: ${email}`);
>>>>>>> Stashed changes
    }
}

module.exports = new AuthController();
