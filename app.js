const chalk = require('chalk')
const yargs = require('yargs');

const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add A new Note',
    builder:{
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            desribe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list down all the notes',
    handler: function(){
        console.log('Listing down all the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler: function(){
        console.log('Read a new Note')
    }
})

yargs.parse()