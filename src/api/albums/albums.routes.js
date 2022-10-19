const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const getTracks = require('./getTracks');
const post = require('./post');
const update = require('./update');
const deleteAlbum = require('./delete');

const router = Router();

router.get('/', getAll.getAll);
router.get('/:id', getOne.getOne);
router.get('/:id/tracks', getTracks.getTracks);
router.post('/', post.post);
router.put('/:id', update.update);
router.delete('/:id', deleteAlbum.deleteAlbum);

module.exports = router;
