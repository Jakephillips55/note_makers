function testconverttoHTML(){
    let noteBook = new newNoteBook
    let note = new newNote("Some Random note")
    let note2 = new newNote("Another Random note")
    noteBook.saveNotes(note)
    noteBook.saveNotes(note2)
    console.log(noteBook.storage[0].text)
    console.log(noteBook.converttoHTML())
    n = "<ul><li><div>Some Random note</div></li><li><div>Another Random note</div></li></ul>"
    assert.isTrue(noteBook.converttoHTML() === n )
  };
  testconverttoHTML()