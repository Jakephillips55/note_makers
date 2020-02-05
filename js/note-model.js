(function(exports) {

  let Note = function(text) {
    this.text = text
  };
  let NoteBook = function() {
    this.storage = []
  };

  NoteBook.prototype.saveNotes = function(notes){ 
    this.storage.push(notes) 
  }

  NoteBook.prototype.convertToHTML = function(){


    // let el = this.storage.map(function(val){return val.text})
     var array = ['<ul>']
     console.log(this.storage)
    for(let i = 0; i < this.storage.length; i++){
      var a = this.storage[i]
      console.log(this.storage)
      array.push(`<li><div>${a}</div></li>`)
      console.log("this is a", a)
      console.log("this is not a", this.storage)
    }
    array.push('</ul>')
    console.log("-------")
    console.log(array[0])
    return array.join("")
  }
  
  Note.prototype.notes = function(){ return this.text }
  
  exports.Note = Note
  exports.NoteBook = NoteBook

})(this);

// exports.new newNoteBook
// new newNote("some random text")
