const express = require('express');

const router = express.Router();

const getAllTrack = require('./getAll');
const getOne = require('./getOne');
const postTrack = require('./post');
const updateTrack = require('./update');
const deleteTrack = require('./delete');

router.get('/', getAllTrack.getAllTrack);
router.get('/:id', getOne.getOneTrack);
router.post('/', postTrack.postTrack);
router.put('/:id', updateTrack.updateTrack);
router.delete('/:id', deleteTrack.deleteTrack); // addinng _ here because 'delete' is a reserved name

module.exports = router;
