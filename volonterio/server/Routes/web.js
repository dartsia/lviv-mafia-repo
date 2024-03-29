const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const AuthController = require('../Controllers/AuthController');
const signUpValidation = require('../Validators/AuthValidator/signUpValidator');

router.post('/registry', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
], (req, res) => {
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
], AuthController.loginStore);

module.exports = router;
