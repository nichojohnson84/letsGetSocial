const res = require('express/lib/response');
const { User, Thought } = require('../models');

const userController = {
  // /api/users
  // get all users
  getAllUsers(req, res) {
    User.find({})
    .select('-__v')
    .sort({ _id: -1 })
    .then(dbUserData => res.join(dbUserData))
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  },

  // get one User by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
    .populate({
      path: 'thoughts',
      select: '-__v'
    })
    .populate({
      path: 'friends',
      select: '-__v'
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No User found with this id Captain!'});
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });
  },

  //Create User
  createUser({ body }, res) {
    User.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  },

  // update User by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {new: true, runValidators: true })
    if (!dbUserData) {
      res.status(404).json({ message: 'No User found with this id Chief!'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => res.json(err));

  //delete User
  //deleteUser({ params }), res) {
    
  }
};
