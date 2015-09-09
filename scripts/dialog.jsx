var myDialog = app.dialogs.add({name:"Welcome"});
    
//Add a dialog column
with(myDialog.dialogColumns.add()) {
    staticTexts.add({staticLabel:"Choose one of the actions below."});
    //create radio button group
    var myRadioButtonGroup = radiobuttonGroups.add();
    with(myRadioButtonGroup) {
        //options for radio buttons
        var myRadioButton1 = radiobuttonControls.add({staticLabel:"Open new file", checkedState:true});
        var myRadioButton2 = radiobuttonControls.add({staticLabel:"Open existing file"});
    }
}

try {
        if(myDialog.show() == true) {
            if(myRadioButtonGroup.selectedButton == 0) {
                var myDocument = app.open(File(MY_TEMPLATE_PATH));
            }
            else {
                var myDocument = File.openDialog("Choose file","*.indd", true);
                app.open(myDocument);
            }
    }
}
//if the user didn't open any file
catch(myError4) {
    dialogvalue = 0;
}