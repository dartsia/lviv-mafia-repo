const express = require('express');
const app = express();

const router = express.Router();
const { body, validationResult } = require('express-validator');

let AuthController = require('../Controllers/AuthController'); 


router.post('/registry', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], AuthController.register);

router.post('/login', [
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],  AuthController.loginStore);

module.exports = router;
