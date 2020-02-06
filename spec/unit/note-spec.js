
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

function testSingleNotesView(){ 
  let note = new Note('hello')
  var sng = new singleNoteView(note) 
  
  assert.isTrue(sng.singlise() === "<div>hello</div>")
}
testSingleNotesView();