
(function(exports){
    function singleNoteView(note){
        this.note = note 
        console.log(note)
    }
    singleNoteView.prototype.singlise = function(){ 
        var single = `<div>${this.note.text}</div>`
        console.log("this is single", single)
       return single  
    }
    
    exports.singleNoteView = singleNoteView

})(this)