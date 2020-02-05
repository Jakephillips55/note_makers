(function(exports){
function NoteController(){
    this.note = new Note() 
    this.NoteBook = new NoteBook()


}
    NoteController.prototype.insertion = function(){
    var text = this.NoteBook.convertToHTML()
    var x = document.getElementById("app");
    x.innerHTML = text;
    console.log(x)
}

    NoteController.prototype.saveInsert = function(text){ 
        this.NoteBook.saveNotes(text)
        console.log(this.NoteBook)
    }
  exports.NoteController = NoteController

})(this);

