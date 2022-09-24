const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReactions,
    deleteReactions

} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/Thoughts
router

    .route('/')
    .get(getAllThoughts)
    .post(createThoughts);

// Set up GET one, PUT, and DELETE at /api/Thoughts/:id.
router

    .route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)
    .delete(deleteThoughts);

router
    .route('/:id/reactions')
    .post(addReactions)
    .delete(deleteReactions);
module.exports = router;