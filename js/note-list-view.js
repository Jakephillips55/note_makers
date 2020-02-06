(function(exports) {
    
    let NoteBook = function() {
        this.storage = [];
        this.map = {}
    };

    NoteBook.prototype.saveNotes = function(notes) {
        this.storage.push(notes);
        this.saveId()
        
    };
    NoteBook.prototype.saveId = function() {
        for (i = 0; i < this.storage.length; i++){
            this.map[i] = this.storage[i]
        }
        this
    }  

    NoteBook.prototype.convertToHTML = function() {
        var array = ["<ul>"];
        for (let i = 0; i < this.storage.length; i++) {
            var a = this.storage[i];
            array.push(`<li><div>${a.substring(0,20)}</div></li>`);
        }
        array.push("</ul>");

        return array.join("");
    };

    Note.prototype.notes = function() {
        return this.text;
    };

    // exports.Note = Note;
    exports.NoteBook = NoteBook;
})(this);

// console.log("saveId", NoteBook.prototype.saveId())