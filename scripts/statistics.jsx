var rootElem = app.activeDocument.xmlElements.item(0);
var images = rootElem.evaluateXPathExpression("//*[starts-with(local-name(),'image')]");

try { 
    var items = app.activeDocument.xmlElements.everyItem();
    // items1 contains all the elements of the cars item
    var items1 = items.xmlElements.itemByName("cars");
    var c_free = items1.xmlElements.itemByName("free");
    var c_prio = items1.xmlElements.itemByName("Priority");
    // items2 contains all the elements of the apartments item
    var items2 = items.xmlElements.itemByName("apartments");
    var a_free = items2.xmlElements.itemByName("free");
    var a_prio = items2.xmlElements.itemByName("Priority");

    var cars_free = c_free.xmlElements.count().length;
    var apartments_free = a_free.xmlElements.count().length;
    var cars_prio_ads = c_prio.xmlElements.count().length;
    var apart_prio_ads = a_prio.xmlElements.count().length;

    var myWindow = new Window ("dialog", "Statistics",  undefined, {closeButton: false});

    var myInputGroup1 = myWindow.add ("group");
    myInputGroup1.alignment = "left";
    myInputGroup1.add ("statictext", undefined, "Cars:");
    myInputGroup1.add ("statictext", undefined, cars_free);

    var myInputGroup2 = myWindow.add ("group");
    myInputGroup2.alignment = "right";
    var del1 = myInputGroup2.add ("button", undefined, "Delete All");
    del1.onClick = function () {}
    myInputGroup2.add ("statictext", undefined, "or:");
    myInputGroup2.add ("edittext", undefined, "number");
    var del2 = myInputGroup2.add ("button", undefined, "Delete");
    del2.onClick = function () {}

    var myInputGroup3 = myWindow.add ("group");
    myInputGroup3.alignment = "left";
    myInputGroup3.add ("statictext", undefined, "Cars Priority Ads:");
    myInputGroup3.add ("statictext", undefined, cars_prio_ads);

    var myInputGroup4 = myWindow.add ("group");
    myInputGroup4.alignment = "right";
    var del3 = myInputGroup4.add ("button", undefined, "Delete All");
    del3.onClick = function () {
       /* for(var i=0; i<items3.xmlElements.length; i++)  {
           var x = items3.xmlElements[i];
           
        }*/
     }
    myInputGroup4.add ("statictext", undefined, "or:");
    myInputGroup4.add ("edittext", undefined, "number");
    var del4 = myInputGroup4.add ("button", undefined, "Delete");
    del4.onClick = function () {}

    var myInputGroup5 = myWindow.add ("group");
    myInputGroup5.alignment = "left";
    myInputGroup5.add ("statictext", undefined, "Apartments:");
    myInputGroup5.add ("statictext", undefined, apartments_free);

    var myInputGroup6 = myWindow.add ("group");
    myInputGroup6.alignment = "right";
    var del5 = myInputGroup6.add ("button", undefined, "Delete All");
    del5.onClick = function () {}
    myInputGroup6.add ("statictext", undefined, "or:");
    myInputGroup6.add ("edittext", undefined, "number");
    var del6 = myInputGroup6.add ("button", undefined, "Delete");
    del6.onClick = function () {}

    var myInputGroup7 = myWindow.add ("group");
    myInputGroup7.alignment = "left";
    myInputGroup7.add ("statictext", undefined, "Apartments Priority Ads:");
    myInputGroup7.add ("statictext", undefined, apart_prio_ads);

    var myInputGroup8 = myWindow.add ("group");
    myInputGroup8.alignment = "right";
    var del7 = myInputGroup8.add ("button", undefined, "Delete All");
    del7.onClick = function () {}
    myInputGroup8.add ("statictext", undefined, "or:");
    myInputGroup8.add ("edittext", undefined, "number");
    var del8 = myInputGroup8.add ("button", undefined, "Delete");
    del8.onClick = function () {}

    var myInputGroup9 = myWindow.add ("group");
    myInputGroup9.alignment = "left";
    myInputGroup9.add ("statictext", undefined, "Image Ads:");
    myInputGroup9.add ("statictext", undefined, images.length);

    var myButtonGroup1 = myWindow.add ("group");
    myButtonGroup1.add ("button", undefined, "OK");
    myButtonGroup1.add ("button", undefined, "Cancel");

    myWindow.show ();
}
catch(myError) {
    alert("There are no elements in your structure. Please insert your XML and try again.");
}