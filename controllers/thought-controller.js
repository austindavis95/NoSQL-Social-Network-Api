const { Thoughts, User } = require('../models');

const thoughtsController = {
    // get all thoughts
    getAllThoughts(req, res) {
      Thoughts.find({})
        .then(dbThoughtsData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },
  
    // get thoughts by id
    getThoughtsById({ params }, res) {
      Thoughts.findOne({ _id: params.id })
        

          .populate({
            path: "reactions",
            select: "-__v"
          })

          .select("-__v")
          .then(thoughts => res.json(thoughts))
          .catch(err =>{
            console.log(err);
            res.status(500).json({message:"Something went wrong!"});

          });
        },

       // creteThoughts({})
    // update thoughts by id

    updateThoughts({ params, body }, res) {
      Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true })
       .then(dbThoughtsData => {
         if (!dbUThoughtsData) {
           res.status(404).json({ message: 'No Thoughts found with this id!' });
           return;
         }
         res.json(dbUserData);
       })
       .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUser({ params }, res) {
     User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
    }
  }

module.exports = userController;