const { Router } = require('express');

const getAll = require('./getAll');
const getOne = require('./getOne');
const post = require('./post');
const update = require('./update');
const delete_ = require('./delete');

const router = Router();

router.get('/track', getAll.getTrack);
router.get('/track/:id', getOne.getTrackById);
router.post('/track', post.createTrack);
router.put('/track/:id', update);
router.delete('/track/:id', delete_.deleteTrack); // addinng _ here because 'delete' is a reserved name

module.exports = router;
