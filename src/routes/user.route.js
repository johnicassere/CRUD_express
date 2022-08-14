const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { validId, validObjectBody } = require('../middlewares/user.middlewares');

router.get('/all-user', userController.findUsersController);
router.get('/one-user/:id', validId, userController.findUserByIdController);
router.post('/create', validObjectBody, userController.createUserController);
router.put(
  '/update/:id',
  validId,
  validObjectBody,
  userController.updateUserController,
);
router.delete('/delete/:id', validId, userController.deleteUserController);

module.exports = router;
