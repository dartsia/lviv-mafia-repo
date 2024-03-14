class AuthController {
    register(req, res) {

        res.send(`${req}`);
    }

    loginStore(req, res) {
        let validated = require('../Validators/AuthValidator');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        console.log(email, password); 
      
        res.send(`Logged in with email: ${req}`);
    }
}

module.exports = new AuthController();

