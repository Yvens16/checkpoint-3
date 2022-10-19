const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const post = require('./post');
const update = require('./update');
const delete_ = require('./delete');

const router = Router();

router.get('/', getAll.getTrack);
router.get('/:id', getOne.getTrackById);
router.post('/', post.postCreateTrack);
router.put('/:id', update.updateTrack);
router.delete('/:id', delete_.deleteTrack); // addinng _ here because 'delete' is a reserved name

module.exports = router;
