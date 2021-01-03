const chalk = require('chalk');
const fs = require('fs');
const { check } = require('yargs');

function readNotes() {
    console.log('reading the notes')
}

/**
 * Internal
 * Loads notes from notes.json file
 */
function loadNotes(){
    try{
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJson = notesBuffer.toString();
        return JSON.parse(notesJson);    
    }catch(e){
        return []
    }
}


function checkIfNoteExist(title){
    const notes = loadNotes();
    return notes.filter((elm) => elm.title === title).length !== 0
}

/**
 * Internal
 * Saves a new Note to notes.json
 * @param {*} notes 
 */
function saveNotes(notes){
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

/**
 * Adds a new note to notes.json
 * @param {*} title 
 * @param {*} body 
 */
function addNotes(title, body){
    const notes = loadNotes();
    debugger
    if(checkIfNoteExist(title)){
        console.log(chalk.red('Can Not Add a Duplicate note. Please check the title.'))
    } else{
        notes.push({title, body});
        console.log(chalk.green('Note added Successfully'))
    }

    saveNotes(notes);
}

/**
 * Remove a note from notes.json based on title
 * @param {*} title 
 */
function removeNote(title){
    const notes = loadNotes();

    if(checkIfNoteExist(title)){
        notes.splice(notes.indexOf(title),1);
        saveNotes(notes);
        console.log(chalk.green('Note Removed Successfully'))
    } else{
        console.log(chalk.red('Could not find a note with the title, please try again.'))
    }
}


module.exports = {
    addNotes,
    removeNote
}