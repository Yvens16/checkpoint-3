const express = require('express');

const router = express.Router();

const getAll = require('./getAll');
const getOne = require('./getOne');
const getTracksFromAlbum = require('./getTracks');
const post = require('./post');
const updateAlbum = require('./update');
const deleteAlbum = require('./delete');

router.get('/', getAll.getAlbums);
router.get('/:id', getOne.getOneAlbum);
router.get('/:id/tracks', getTracksFromAlbum.getTracksFromAlbum);
router.post('/', post.postAlbum);
router.put('/:id', updateAlbum.updateAlbum);
router.delete('album/:id', deleteAlbum.deleteAlbum); // addinng _ here because 'delete' is a reserved name

module.exports = router;
