const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const getTracks = require('./getTracks');
const post = require('./post');
const update = require('./update');
const delete_ = require('./delete');

const router = Router();

router.get('/album', getAll.getAlbum);
router.get('/album/:id', getOne.getAlbumById);
router.get('/trackAlbum/:id_album', getTracks.getTracksFromAlbum);
router.post('/album', post.createAlbum);
router.put('/album/:id', update);
router.delete('/album/:id', delete_.deleteAlbum); // addinng _ here because 'delete' is a reserved name

module.exports = router;
