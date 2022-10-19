const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const post = require('./post');
const update = require('./update');
const deleteTrack = require('./delete');

const router = Router();

router.get('/', getAll.getAll);
router.get('/:id', getOne.getOne);
router.post('/', post.post);
router.put('/:id', update.update);
router.delete('/:id', deleteTrack.deleteTrack);

module.exports = router;
