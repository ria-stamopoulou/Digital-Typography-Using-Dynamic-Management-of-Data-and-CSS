//ExportPDFWithPreset
var outFile; 
var outPath = "/E/presentation";
var activeFile = app.activeDocument;
var myDialog1 = app.dialogs.add({name:"Choose a preset"});

//Add a dialog column.
with(myDialog1.dialogColumns.add()) {
    var myRadioButtonGroup = radiobuttonGroups.add();
    with(myRadioButtonGroup) {
        var myRadioButton1 = radiobuttonControls.add({staticLabel:"High Quality Print", checkedState:true});
        var myRadioButton2 = radiobuttonControls.add({staticLabel:"Press Quality"});
        var myRadioButton3 = radiobuttonControls.add({staticLabel:"Smallest File Size"});
        //var myRadioButton4 = radiobuttonControls.add({staticLabel:"My Custom Preset"});
    }
}

if(myDialog1.show() == true) {
    if(myRadioButtonGroup.selectedButton == 0) {
        var myPDFExportPreset = app.pdfExportPresets.item("[High Quality Print]");
    }
    else if(myRadioButtonGroup.selectedButton == 1) {
        var myPDFExportPreset = app.pdfExportPresets.item("[Press Quality]");
    }
    else {
        var myPDFExportPreset = app.pdfExportPresets.item("[Smallest File Size]");
    }
}

// Make sure that the output file doesn't exist yet
document.exportFile(ExportFormat.PDF_TYPE, File(outPath + '/' + activeFile .name.replace(/indd$/,'pdf')), false);
alert("Export successful");