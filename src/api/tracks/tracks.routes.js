const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const post = require('./post');
const update = require('./update');
const delete_track = require('./delete');

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', post);
router.put('/:id', update);
router.delete('/:id', delete_track); // addinng _ here because 'delete' is a reserved name

module.exports = router;
