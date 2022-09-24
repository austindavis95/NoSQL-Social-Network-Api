const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    user: {
      type: String,
      required: "Username is required",
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: "Valid email is required",
      unique: true,
      validate: {
        validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please provide a valid email"
    },


    },
    thoughts: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }],

    friends: {
      type: String,
      default: 'Large'
    }
  });

  // create the user model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;