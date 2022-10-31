
const express = require('express');
const notesData = require('./db/db.json');
// const notesPage = require('./public/notes.html')

const PORT = 3001;

const app = express();




// we need HTML routes for get notes.
// GET /notes should return the notes.html file.
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  );

// GET * should return the index.html file
app.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

// need API routes 
// GET /api/notes should read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => res.json(notesData));

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. 
app.post('/api/notes', (req, res) => );

// You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).





// bonus shmonus
// add that DELETE my dude