(function(exports){
function NoteController(){
    this.note = new Note() 
    this.NoteBook = new NoteBook()
    this.id = 0

    console.log('this is controller', Note())
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
        this.note.text = text
        this.id = Object.keys(this.id.length -1)
    }

    makeUrlChange(); 
    function makeUrlChange() {
        window.addEventListener('hashchange', showNotePage); 
    }

    function showNotePage() {
        showNote(this.NoteBook.storage[getNoteUrl(window.location)])
    }
    function getNoteUrl(location) {
        return location.hash.split("#notes/")[1];
    }

    function showNote(note){
        document.getElementById("app").innerHTML = note; 
    }

    exports.NoteController = NoteController

})(this);

