var myTemplate = File ("/E/presentation/template-5.indt"),
myFolder = Folder ("/E/presentation/xml/"),
myNewDoc = app.open(myTemplate)

myImportXMLFiles();

function myImportXMLFiles() {
    try {
        myXMLFolder=Folder(myFolder).selectDlg("Choose a source folder for XMLs"),  
        myXMLDocs = myXMLFolder.getFiles("*.xml"),
        // To xsl mou
        myXSL = "/E/presentation/xml/myXSL_.xsl";
        }
        catch (myError) {
            return;
        }

    for(var i= 0; i< myXMLDocs.length; i++) {
        var myDocument = app.activeDocument;
        var myXMLImportPreferences = myDocument.xmlImportPreferences;
        var myXMLViewPreferences = myDocument.xmlViewPreferences;
        with (myXMLViewPreferences) {
            showAttributes = false;
            showStructure = true;
            showTaggedFrames = false;
            showTagMarkers = true;
            showTextSnippets = false;
        }                             

        with (myXMLImportPreferences) {
            importStyle = XMLImportStyles.APPEND_IMPORT;
            //importStyle = XMLImportStyles.mergeImport;
            importToSelected = true;
            createLinkToXML = false;
            repeatTextElements = false;
            removeUnmatchedExisting = false;
            importTextIntoTables = true;
            ignoreWhitespace = true;
            ignoreUnmatchedIncoming = false;
            importCALSTables = true;
            allowTransform = true;
            transformFilename = File(myXSL); 
        }
        var myRootXMLElement = myDocument.xmlElements.item(0);
        myDocument.importXML(myXMLDocs[i]);
    }
}