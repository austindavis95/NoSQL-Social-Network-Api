const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    userName: {
      type: String
    },
    email: {
      type: String
    },
    thoughts: {
      type: Date,
      default: Date.now
    },
    friends: {
      type: String,
      default: 'Large'
    }
  });

  // create the user model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;