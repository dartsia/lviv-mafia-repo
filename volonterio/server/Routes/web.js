const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const AuthController = require('../Controllers/AuthController');
const UserController = require('../Controllers/UserController');
const productController = require('../Controllers/ProductController');
const signUpValidation = require('../Validators/AuthValidator/signUpValidator');
const resetPasswdValidation = require('../Validators/AuthValidator/resetPasswdValidator');
const s3Service = require('../Services/StorageFile');
const authMiddleware = require('../Middleware/AuthMiddleware');



router.post(
  '/registry',
  s3Service.createUpload('volonterio-storage', 'users/avatar').single('file'),
   (req, res) => {
  const errors = signUpValidation(req);
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  } else {
    AuthController.register(req, res);
  }
});

router.post(
  '/login', 
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  ],
  AuthController.login
);

router.get('/users', UserController.index);

router.get('/users/:id/verify', UserController.verify);

router.get('/status', (req, res) => {
  if (req.session.userId) {
      res.send('User is logged in');
  } else {
    res.send('User is not logged in');
  }
});

router.post('/forgot-password', AuthController.forgotPassword);

router.post('/reset-password/:token',  (req, res) => {
  const errors = resetPasswdValidation(req);
  if (errors.length > 0) {
    return res.status(400).json({ errors: errors });
  } else {
    AuthController.resetPassword(req, res);
  }
});

router.get('/products', productController.index);


router.post('/products', 
  s3Service.createUpload('volonterio-storage', 'products').single('file'),
  authMiddleware,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required').isLength({ max: 255 }).withMessage('Description must be less than 256 characters'),
  ],
  productController.store
);

router.get('/product-info/:id',
  // storageFile.single('file'),
  // [
  //   body('title').notEmpty().withMessage('Title is required'),
  //   body('description').notEmpty().withMessage('Description is required').isLength({ max: 255 }).withMessage('Description must be less than 256 characters'),
  // ], 
  productController.show
);

router.get('/logout', AuthController.logout);

module.exports = router;
