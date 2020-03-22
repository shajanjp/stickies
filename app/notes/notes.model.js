const Datastore = require('nedb');

const db = new Datastore({ 
  filename: '.data/notes.json',
  autoload: true
});


module.exports = db;
