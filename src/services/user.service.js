const User = require('../models/User');

const findUsersService = async () => {
  const users = await User.find();
  return users;
};

const findUserByIdService = async (id) => {
  const user = await User.findById(id);
  return user;
};

const createUserService = async (newUser) => {
  console.log(newUser);
  const userCreate = await User.create(newUser);
  return userCreate;
};

const updateUserService = async (id, userEdited) => {
  const userUpdate = await User.findByIdAndUpdate(id, userEdited);
  return userUpdate;
};

const deleteUserService = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  findUsersService,
  findUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
};
