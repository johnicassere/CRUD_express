const userService = require('../services/user.service');

const findUsersController = async (req, res) => {
  const allUsers = await userService.findUsersService();
  res.send(allUsers);
};

const findUserByIdController = async (req, res) => {
  const idParam = req.params.id;
  const user = await userService.findUserByIdService(idParam);
  res.send(user);
};

const createUserController = async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = await userService.createUserService(user);
  res.send(newUser);
};

const updateUserController = async (req, res) => {
  const idParam = req.params.id;
  const userEdit = req.body;
  const chosenUser = await userService.findUserByIdService(idParam);
  const updateUser = await userService.updateUserService(idParam, userEdit);
  res.send(updateUser);
};

const deleteUserController = async (req, res) => {
  const idParam = req.params.id;
  await userService.deleteUserService(idParam);
  res.send({ message: 'User deletado com sucesso!' });
};

module.exports = {
  findUsersController,
  findUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
};
