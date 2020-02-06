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
    noteController.saveInsert('test test test test test test test')
    mockElement()
    noteController.insertion("app")
    assert.isTrue(document.getElementById("app").innerHTML.includes('testOne'))
    assert.isTrue(document.getElementById("app").innerHTML.includes('test test test test '))
    console.log('testInsert passing') 
  })();
  function mockElement() {
    var testApp = document.createElement("div")
    testApp.id = "test"
  };
  

//   (function testInsert() {
//     var noteController = new NoteController()
//     noteController.addNote('Asia')
//     // mockElement()
//     var fakeDiv = {
//       innerHTML: ""
//     }
//     var fakeDocument = {
//       getElementById: function(){
//         return fakeDiv
//       }
//     }
//     // console.log(document.getElementById("test").innerHTML)
//     noteController.insert("test", fakeDocument)
//     assert.isTrue(fakeDiv.innerHTML.includes('Asia'))
//     // console.log('testInsert passing') 
//     // console.log(document.getElementById("test").innerHTML)
//   })();
  
// NoteController.prototype.insert = function(id, doc = document) {
//     var message = this.viewNote()
//     var element = doc.getElementById(id)
//     console.log(element);
//     element.innerHTML = message
//     console.log("Im inserting")
//   }
  
  