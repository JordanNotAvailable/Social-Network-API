const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: 'Username is required!',
            trimmed: true,
        },
        email: {
                type: String,
                unique: true, 
                required: 'Email is required!',
                match: [/.+@.+\..+/, 'Please enter a valid Email']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
        ],
    },
    {
        toJSON: {
          getters: true,
        },
    }
)

const User = model('user', userSchema);

module.exports = User;