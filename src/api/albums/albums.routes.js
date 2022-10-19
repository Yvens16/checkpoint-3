const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const getTracks = require('./getTracks');
const post = require('./post');
const update = require('./update');
const delete_album = require('./delete');

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/:id/tracks', getTracks);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', delete_album); // addinng _ here because 'delete' is a reserved name

module.exports = router;
