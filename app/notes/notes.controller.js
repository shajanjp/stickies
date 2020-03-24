const noteService = require('./notes.service.js');
const noteDTO = require('./notes.dto.js');

function noteById(req, res, next, noteId){
  noteService.noteById(noteId)
  .then(noteFound => {
    res.locals.noteId = noteFound._id;
    next();
  })
  .catch(error => {
    res.status(400)
    .json({
      error: error
    })
  })
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
  noteService.updateNote({ _id: res.locals.noteId }, noteDTO(req.body))
  .then(noteUpdated => {
    res.json({});
  })
  .catch(error => {
    res.status(500)
    .json({
      error: error || 'Something went wrong'
    })
  })
}

function removeNote(req, res){
  noteService.removeNote({ _id: res.locals.noteId })
  .then(noteRemoved => {
    res.json({});
  })
  .catch(error => {
    res.status(500)
    .json({
      error: error || 'Something went wrong'
    })
  })
}

function getNote(req, res){
  noteService.getNote(res.locals.noteId)
  .then(noteFound => {
    res.json(noteDTO(noteFound));
  })
  .catch(error => {
    res.status(500)
    .json({
      error: error || 'Something went wrong'
    })
  }) 
}

module.exports = {
  noteById,
  listNotes,
  insertNote,
  updateNote,
  removeNote,
  getNote
}