const User = require('../Models/User');
const sendEmail = require('../Services/SendEmail');

class UserController {
    async index(req, res) {
        try {
            let users = await User.find({});
            res.json(users);
        } catch (error) {
            res.status(500).send('Error Server');
        }
    }

    async verify(req, res) {
        try {
            let user = await User.findOne({ _id: req.params.id });
            if (!user) return res.status(400).send({ message: "Invalid link" });

            await User.updateOne({ _id: user._id }, { verified: true });

            res.redirect("http://localhost:3000/");
            // res.writeHead(301, {
            //     Location: "http://localhost:3000/"
            // }).send({ message: "Email verified." });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error Server');
        }
    }

    async contactUs (req,res) {
        try {
            const email = req.body.email;
            const text = req.body.text;
            const usersName = req.body.name;

            sendEmail(email, process.env.USER_EMAIL, `${usersName}'s question`, text);
            res.status(201).send({ message: "An email has been sent to us. Please wait for our answer." });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error Server');
        }
    }
}

module.exports = new UserController();
