var myDocument;

try{
    myDocument = app.activeDocument;
}
//If not add a document from template
catch (myError){
    alert("You have to save your document first!");
}

myDocument.revert();