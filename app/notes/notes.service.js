const Notes = require('./notes.model.js');

function noteById(){

}

function listNotes(query = {}){
  return new Promise((resolve, reject) => {
    Notes.find(query, function (err, notesFound) {
      if(err){
        reject(err)
      }
      else{
        resolve(notesFound)
      }
    });
  })
}

function insertNote(noteData){
  return new Promise((resolve, reject) => {
    Notes.insert(noteData, function (err, noteSaved) {
      if(err){
        reject(err);
      }
      else{
        resolve(noteSaved)
      }
    });
  })
}

function updateNote(query = {}, data = {}, options = {}){
  return new Promise((resolve, reject) => {
    Notes.update(query, { $set: data }, options, function (err, noteUpdated) {
      if(err){
        reject(err);
      }
      else {
        resolve(noteUpdated);
      }
    });
  })
}

function removeNote(query, options = {}){
  return new Promise((resolve, reject)=> {
    Notes.remove(query, {}, function (err, notesRemoved) {
      if(err) {
        reject(err)
      }
      else {
        resolve(notesRemoved);
      }
    });
  })
}

function getNote(noteId){
  return listNotes({_id: noteId});
}

module.exports = {
  noteById,
  listNotes,
  insertNote,
  updateNote,
  removeNote,
  getNote,
}
