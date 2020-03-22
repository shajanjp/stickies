const express = require('express');
const app = express();
const apiRoutes = express.Router();
const bodyParser = require('body-parser')
const noteRoutes = require('./app/notes/notes.router.js');

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

apiRoutes.use('/notes', noteRoutes)

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello' 
  })
})

module.exports = app;
