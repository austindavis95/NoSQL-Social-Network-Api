const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    user: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
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

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    },

    {
    toJSON: {
      virtuals: true,
    },
      id: false,
  },
  
  );

  // calucaltes user friend count

  UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

  // create the user model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;