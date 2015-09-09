// Make sure the INDT template file exists
if ( !(myTemplateFile=File(MY_TEMPLATE_PATH)).exists ) {
    alert("Template not found!");
}

//Make sure that there is a active document
try{
    myDocument = app.activeDocument;
}
//if there is no document open, choose from a dialog
//either open a new document or an existing one
catch (myError) {
    var myScriptFile = new File ("/C/Program Files (x86)/Adobe/Adobe InDesign CS6/Scripts/Scripts Panel/np/dialog.jsx");
    if (myScriptFile.exists)  {
        app.doScript(myScriptFile, ScriptLanguage.JAVASCRIPT) ;
    }
}