const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const AuthController = require('../Controllers/AuthController');
const UserController = require('../Controllers/UserController');
const signUpValidation = require('../Validators/AuthValidator/signUpValidator');

router.post('/registry', (req, res) => {
  const errors = signUpValidation(req);
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  } else {
    AuthController.register(req, res);
  }
});

router.post('/login', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], AuthController.login);

router.get('/users', UserController.index);

router.get('/status', (req, res) => {
  if (req.session.userId) {
      res.send('User is logged in');
  } else {
      res.send('User is not logged in');
  }
});


module.exports = router;
