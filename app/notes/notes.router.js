const express = require('express');
const router = express.Router();
const notesController = require('./notes.controller.js');

router.route('/')
.post(notesController.insertNote)
.get(notesController.listNotes);

router.route('/:noteId')
.put(notesController.updateNote)
.get(notesController.getNote)
.delete(notesController.removeNote);

router.param('noteId', notesController.noteById);

module.exports = router;
