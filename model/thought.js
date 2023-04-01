const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const {dateFormat} = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            reactions: [reactionSchema],
        }
    },
    {
        toJSON: {
          getters: true,
        },
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;