(function(exports) {

  let Note = function(text) {
    this.text = text
    this.id = null 
  };



  // let NoteBook = function() {
  //   this.storage = []
  // };


  // NoteBook.prototype.saveNotes = function(notes){ 
  //   this.storage.push(notes) 
  // }

  // NoteBook.prototype.convertToHTML = function(){


  //    var array = ['<ul>']
  //   for(let i = 0; i < this.storage.length; i++){
  //     var a = this.storage[i]
  //     array.push(`<li><div>${a}</div></li>`)
  //   }
  //   array.push('</ul>')
    
  //   return array.join("")
  // }
  
  // Note.prototype.notes = function(){ return this.text }
  
  exports.Note = Note
  // exports.NoteBook = NoteBook

})(this);

// exports.new newNoteBook
// new newNote("some random text")
