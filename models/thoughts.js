const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
      // set custom id to avoid confusion with parent thought's _id field
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        maxLength: 280,
        trim: true,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        id: false
      }
    );
   
const ThoughtsSchema = new Schema(
    {
      thoughtContent: {
        type: String,
        required: "Providing a thought is required",
        minLength: 1,
        maxLenght: 280,
      },

      user: {
        type: String,
        required: true
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      // use Reaction Schema to validate data for a reply
      reactions: [ReactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
  );

    ThoughtsSchema.virtual('replyCount').get(function() {
        return this.replies.length;
      });

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;