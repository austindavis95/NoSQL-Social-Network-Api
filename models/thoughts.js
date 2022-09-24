const { Schema, model, Types } = require('mongoose');

const ThoughtsSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;