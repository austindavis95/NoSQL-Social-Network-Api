const { User } = require('../models');

const userController = {
    // get all users
    getAllPizza(req, res) {
      Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get user by id
    getUserById({ params }, res) {
      User.findOne({ _id: params.id })
        .then(dbUserData => {
          // If no user is found, send 404
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // createUser
    createUser({ body }, res) {
      User.create(body)
       .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
    },
  }

module.exports = userController;