const MY_TEMPLATE_PATH = "/E/presentation/template-5.indt";
 
(function() {
    
    var myTemplateFile,          // the template File object
    myTemplate,                     // the template Document
    myXmlFile,                        // the current XML File
    dialogvalue = 1,                //0 if no open file
    xmlimported = true;

    var myScriptFile_1 = new File ("/C/Program Files (x86)/Adobe/Adobe InDesign CS6/Scripts/Scripts Panel/np/template_check.jsx");
    if (myScriptFile_1.exists)  {
        app.doScript(myScriptFile_1, ScriptLanguage.JAVASCRIPT) ;
    }

    //if there is an open file
    if(dialogvalue == 1) {
        try {
            alert("Choose XML files!");
            //Open dialog box to select  xml file(s)
            myXmlFile =File.openDialog("Choose the file","*.xml", true);
        }
        catch (myError){                   
            // Cancelled by the user
            alert("No files were selected.");
            return;
        }

        //control the appearance of the InDesign structure panel using the XML view-preferences object
        var myXMLViewPreferences = myDocument.xmlViewPreferences;
        myXMLViewPreferences.showAttributes = true;
        myXMLViewPreferences.showStructure = true;
        myXMLViewPreferences.showTaggedFrames = false;
        myXMLViewPreferences.showTagMarkers = true;
        myXMLViewPreferences.showTextSnippets = true;

        // XML import preferences
        var myXMLImportPreferences = myDocument.xmlImportPreferences;
        myXMLImportPreferences.importStyle = XMLImportStyles.mergeImport; //select it!
        myXMLImportPreferences.importToSelected = true;
        myXMLImportPreferences.createLinkToXML = false;
        myXMLImportPreferences.repeatTextElements = true;
        myXMLImportPreferences.removeUnmatchedExisting = false;
        myXMLImportPreferences.importTextIntoTables = false;
        myXMLImportPreferences.ignoreWhitespace = true;
        myXMLImportPreferences.ignoreUnmatchedIncoming = false;
        myXMLImportPreferences.importCALSTables = false;
        myXMLImportPreferences.allowTransform = false;

        function showArray(myXmlFile)  {
            try {
                for(var i=0; i<myXmlFile.length; i++)  {
                    myXmlFile[i];
                    var xmlElements = myDocument.xmlElements;
                    var myXMLElement = myDocument.xmlElements.item(0);
                    myDocument.select(myXMLElement);                             
                    myDocument.importXML(File(myXmlFile[i]));
                }
            }
            catch(myError1) {
                //if the user didn't import any xml files
                alert("You didn't choose any xml files");
                xmlimported = false;
                return;
            }
        }

        showArray(myXmlFile);

        //call script to clean the xml markup (extra tags, spaces etc)
        if(xmlimported == true) {
            alert ("Ads imported!");
        }

        if(app.activeDocument.modified == true){
            alert("You have to save your progress!");
            app.activeDocument.save();
        }
    }
     else {
        alert("No open file was found. Please try again.");
    }
})();