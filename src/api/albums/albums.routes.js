const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const getTracks = require('./getTracks');
const post = require('./post');
const update = require('./update');
const delete_ = require('./delete');

const router = Router();

router.get('/', getAll.getAlbum);
router.get('/:id', getOne.getAlbumById);
router.get('/:id/tracks', getTracks.getTrackAlbumById);
router.post('/', post.postCreateAlbum);
router.put('/:id', update.updateAlbum);
router.delete('/:id', delete_.deleteAlbum); // addinng _ here because 'delete' is a reserved name

module.exports = router;
