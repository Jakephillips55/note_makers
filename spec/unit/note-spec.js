function testIsString(){
  let n = new Note("Hello World")
  let t = n.text
  assert.isTrue(typeof t === 'string')
  assert.isTrue(n.text === "Hello World")
};
testIsString();

function testHasArray(){
  let noteBook = new NoteBook
  let notes = noteBook.storage
  let notesArray = []
  assert.isTrue(typeof notes === 'object')
};
testHasArray();

function teststoresNotesInArray(){
  let noteBook = new NoteBook
  let note = "some random note to test"
  noteBook.saveNotes(note)
  let n = noteBook.storage
  assert.isTrue(n[0] === "some random note to test")
};
teststoresNotesInArray();

function testconvertToHTML(){
  let noteBook = new NoteBook
  // let note = new Note("Some Random note")
  // let note2 = new Note("Another Random note")
  noteBook.saveNotes("Some Random note")
  noteBook.saveNotes("Another Random note")
  console.log(noteBook.storage[0].text)
  console.log(noteBook.convertToHTML())
  n = "<ul><li><div>Some Random note</div></li><li><div>Another Random note</div></li></ul>"
  assert.isTrue(noteBook.convertToHTML() === "<ul><li><div>Some Random note</div></li><li><div>Another Random note</div></li></ul>" )
};
testconvertToHTML()