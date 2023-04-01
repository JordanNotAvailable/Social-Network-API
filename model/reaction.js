const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {

        },
        reactionBody: {

        },
        username: {

        },
        createdAt: {
            
        }
    },
    {
        toJSON: {
          getters: true,
        },
    }
)

module.exports = reactionSchema;