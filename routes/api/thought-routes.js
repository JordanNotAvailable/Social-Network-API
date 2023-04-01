const router = require('express').Router();

const {
    getThoughts,
    getThoughtByID,
    addThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controller/thoughtsController');

//Home route for thoughts /api/thoughts/
router.route('/')
.get(getThoughts)

//  Gets the user id for the thoughts api/thoughts/:userId
router.route('/:userId')
.post(addThought)

//Gets the thought id for the thoughts /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

//Gets the reactions to the thoughts /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

//Gets the reaction id for the thoughts /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction)

module.exports = router;