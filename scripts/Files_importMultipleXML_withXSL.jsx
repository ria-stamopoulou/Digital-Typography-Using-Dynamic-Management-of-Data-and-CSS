var myTemplateFile,          // the template File object
myTemplate,                     // the template Document
myXmlFile,                        // the current XML File
dialogvalue = 1,                //0 if no open file
xmlimported = true,
MY_TEMPLATE_PATH = "/E/presentation/template-6.indt",
myXSL = "/E/presentation/xml/myXSL_.xsl";
//myDocument = app.activeDocument;
               
              /* 
               if(app.activeDocument.modified == true){
                alert("You have to save your progress!");
                app.activeDocument.save();
                }
*/
function showArray(myXmlFile)  {
    for(var i=0; i<myXmlFile.length; i++)  {
        myXmlFile[i];
        var xmlElements = myDocument.xmlElements;
        var myXMLElement = myDocument.xmlElements.item(0);
        myDocument.select(myXMLElement);                             
        myDocument.importXML(File(myXmlFile[i]));
    }
}

//check if there is an open file
var myScriptFile_1 = new File ("/C/Program Files (x86)/Adobe/Adobe InDesign CS6/Scripts/Scripts Panel/np/template_check.jsx");
if (myScriptFile_1.exists)  {
    app.doScript(myScriptFile_1, ScriptLanguage.JAVASCRIPT) ;
}

//if there is an open file
if(dialogvalue == 1) {
    alert("Choose XML files!");
    if(!(myXmlFile =File.openDialog("Choose the file","*.xml", true))) {
        //the user didn't select any files
        xmlimported = false;
    }

    //successful import of xml files
     if(xmlimported == true) {
         
        //control the appearance of the InDesign structure panel using the XML view-preferences object
        var myXMLViewPreferences = myDocument.xmlViewPreferences;
        myXMLViewPreferences.showAttributes = true;
        myXMLViewPreferences.showStructure = true;
        myXMLViewPreferences.showTaggedFrames = false;
        myXMLViewPreferences.showTagMarkers = true;
        myXMLViewPreferences.showTextSnippets = true;

        // XML import preferences
        var myXMLImportPreferences = myDocument.xmlImportPreferences;
        myXMLImportPreferences.importStyle = XMLImportStyles.mergeImport;
        //myXMLImportPreferences.importStyle = XMLImportStyles.APPEND_IMPORT;
        myXMLImportPreferences.importToSelected = true;
        myXMLImportPreferences.createLinkToXML = false;
        myXMLImportPreferences.repeatTextElements = true;
        myXMLImportPreferences.removeUnmatchedExisting = false;
        myXMLImportPreferences.importTextIntoTables = false;
        myXMLImportPreferences.ignoreWhitespace = true;
        myXMLImportPreferences.ignoreUnmatchedIncoming = false;
        myXMLImportPreferences.importCALSTables = false;
                                
        myXMLImportPreferences.allowTransform = true;
        myXMLImportPreferences.transformFilename = File(myXSL);   

        showArray(myXmlFile);

        alert ("Import successful!");
    }
    else {
        alert("You didn't import any xml files.");
    }
}
else {
    alert("No open file was found. Please try again.");
}