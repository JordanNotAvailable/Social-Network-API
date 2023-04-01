const router = require('express').Router();

const {
    getUsers,
    addUser,
    getUserByID,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controller/userController');

//Home route for the users /api/users
router.route('/')
.get(getUsers)
.post(addUser);

//Gets the user by id /api/users/:id
router.route('/:id')
.get(getUserByID)
.put(updateUser)
.delete(deleteUser);

//Gets the users friends by id /api/users/:id/friends/:friendId

router.route('/:id/friends/:friendID')
.post(addFriend)
.delete(deleteFriend)


module.exports = router;