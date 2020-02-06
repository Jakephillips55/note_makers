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
//   testconvertToHTML()

(function testInsert() {
    var noteController = new NoteController()
    noteController.saveInsert('testOne')
    mockElement()
    noteController.insertion("app")
    assert.isTrue(document.getElementById("app").innerHTML.includes('testOne'))
    console.log('testInsert passing') 
  })();
  function mockElement() {
    var testApp = document.createElement("div")
    testApp.id = "test"
  };
  
  
  
  
  
  