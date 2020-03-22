const noteService = require('./notes.service.js');
const noteDTO = require('./notes.dto.js');

function noteById(req, res, next, noteId){
  next()
}

function listNotes(req, res){
  noteService.listNotes()
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    res.status(500)
    .json({
      error: error,
      message: "Something went wrong"
    })
  })
}

function insertNote(req, res){
  noteService.insertNote(noteDTO(req.body))
  .then(done => {
    res.json(done);
  })
  .catch(error => {
    res.status(500)
    .json({
      error: error,
      message: "Something went wrong"
    })
  })
}

function updateNote(req, res){
  res.json({});
}

function removeNote(req, res){
  res.json({});
}

function getNote(req, res){
  res.json({});
}

module.exports = {
  noteById,
  listNotes,
  insertNote,
  updateNote,
  removeNote,
  getNote
}