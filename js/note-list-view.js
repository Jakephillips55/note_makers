(function(exports) {
    
    let NoteBook = function() {
        this.storage = [];
    };

    NoteBook.prototype.saveNotes = function(notes) {
        this.storage.push(notes);
        
    };
    NoteBook.prototype.saveId = function() {
        var hash = 0, i, chr; 
        if (this.storage.length === 0 ) return hash; 
        for (i = 0; i < this.storage.length; i++) {
            chr = this.charCodeAt(i); 
            hash = ((hash << 5) - hash) + chr; 
            hash |= 0; 
        } 

        return hash; 
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

console.log("saveId", this.NoteBook.saveId())