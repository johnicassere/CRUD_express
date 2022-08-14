const mongooose = require('mongoose');

const UserSchema = new mongooose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  img: { type: String, required: true },
  published: { type: Boolean, required: true },
});

const User = mongooose.model('users', UserSchema);

module.exports = User;
