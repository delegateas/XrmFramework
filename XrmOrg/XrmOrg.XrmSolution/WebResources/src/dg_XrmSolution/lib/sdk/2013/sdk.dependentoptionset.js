// =====================================================================
//  This file is part of the Microsoft Dynamics CRM SDK code samples.
//
//  Copyright (C) Microsoft Corporation.  All rights reserved.
//
//  This source code is intended only as a supplement to Microsoft
//  Development Tools and/or on-line documentation.  See these other
//  materials for detailed information regarding Microsoft code samples.
//
//  THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
//  KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//  PARTICULAR PURPOSE.
// =====================================================================
// <snippetSDK.DependentOptionSet.js>

//If the SDK namespace object is not defined, create it.
if (typeof (SDK) == "undefined")
{ SDK = {}; }
// Create Namespace container for functions in this library;
SDK.DependentOptionSet = {};
SDK.DependentOptionSet.init = function (webResourceName) {
 //Retrieve the XML Web Resource specified by the parameter passed
 var clientURL = Xrm.Page.context.getClientUrl();

 var pathToWR = clientURL + "/WebResources/" + webResourceName;
 var xhr = new XMLHttpRequest();
 xhr.open("GET", pathToWR, true);
 xhr.setRequestHeader("Content-Type", "text/xml");
 xhr.onreadystatechange = function () { SDK.DependentOptionSet.completeInitialization(xhr); };
 xhr.send();
};
SDK.DependentOptionSet.completeInitialization = function (xhr) {
 if (xhr.readyState == 4 /* complete */) {
     if (xhr.status == 200) {
         xhr.onreadystatechange = null; //avoids memory leaks
   var JSConfig = [];
   var ParentFields = xhr.responseXML.documentElement.getElementsByTagName("ParentField");
   for (var i = 0; i < ParentFields.length; i++) {
    var ParentField = ParentFields[i];
    var mapping = {};
    mapping.parent = ParentField.getAttribute("id");
    mapping.dependent = SDK.Util.selectSingleNode(ParentField, "DependentField").getAttribute("id");
    mapping.options = [];
    var options = SDK.Util.selectNodes(ParentField, "Option");
    for (var a = 0; a < options.length; a++) {
     var option = {};
     option.value = options[a].getAttribute("value");
     option.showOptions = [];
     var optionsToShow = SDK.Util.selectNodes(options[a], "ShowOption");
     for (var b = 0; b < optionsToShow.length; b++) {
      var optionToShow = {};
      optionToShow.value = optionsToShow[b].getAttribute("value");
      optionToShow.text = optionsToShow[b].getAttribute("label");
      option.showOptions.push(optionToShow);
     }
     mapping.options.push(option);
    }
    JSConfig.push(mapping);
   }
   //Attach the configuration object to DependentOptionSet
   //so it will be available for the OnChange events 
   SDK.DependentOptionSet.config = JSConfig;
   //Fire the onchange event for the mapped optionset fields
   // so that the dependent fields are filtered for the current values.
   for (var depOptionSet in SDK.DependentOptionSet.config) {
    var parent = SDK.DependentOptionSet.config[depOptionSet].parent;
    Xrm.Page.data.entity.attributes.get(parent).fireOnChange();
   }
  }
 }
};
 // This is the function set on the onchange event for 
 // parent fields
SDK.DependentOptionSet.filterDependentField = function (parentField, childField) {
 for (var depOptionSet in SDK.DependentOptionSet.config) {
  var DependentOptionSet = SDK.DependentOptionSet.config[depOptionSet];
  /* Match the parameters to the correct dependent optionset mapping*/
  if ((DependentOptionSet.parent == parentField) && (DependentOptionSet.dependent == childField)) {
   /* Get references to the related fields*/
   var ParentField = Xrm.Page.data.entity.attributes.get(parentField);
   var ChildField = Xrm.Page.data.entity.attributes.get(childField);
   /* Capture the current value of the child field*/
   var CurrentChildFieldValue = ChildField.getValue();
   /* If the parent field is null the Child field can be set to null */
   if (ParentField.getValue() == null) {
    ChildField.setValue(null);
    ChildField.setSubmitMode("always");
    ChildField.fireOnChange();

    // Any attribute may have any number of controls
    // So disable each instance
    var controls = ChildField.controls.get()

    for (var ctrl in controls) {
     controls[ctrl].setDisabled(true);
    }
    return;
   }

   for (var os in DependentOptionSet.options) {
    var Options = DependentOptionSet.options[os];
    var optionsToShow = Options.showOptions;
    /* Find the Options that corresponds to the value of the parent field. */
    if (ParentField.getValue() == Options.value) {
     var controls = ChildField.controls.get();
     /*Enable the field and set the options*/
     for (var ctrl in controls) {
      controls[ctrl].setDisabled(false);
      controls[ctrl].clearOptions();

      for (var option in optionsToShow) {
       controls[ctrl].addOption(optionsToShow[option]);
      }

     }
     /*Check whether the current value is valid*/
     var bCurrentValueIsValid = false;
     var ChildFieldOptions = optionsToShow;

     for (var validOptionIndex in ChildFieldOptions) {
      var OptionDataValue = ChildFieldOptions[validOptionIndex].value;

      if (CurrentChildFieldValue == OptionDataValue) {
       bCurrentValueIsValid = true;
       break;
      }
     }
     /*
     If the value is valid, set it.
     If not, set the child field to null
     */
     if (bCurrentValueIsValid) {
      ChildField.setValue(CurrentChildFieldValue);
     }
     else {
      ChildField.setValue(null);
     }
     ChildField.setSubmitMode("always");
     ChildField.fireOnChange();
     break;
    }
   }
  }
 }
};

SDK.Util = {};
//Helper methods to merge differences between browsers for this sample
 SDK.Util.selectSingleNode = function (node, elementName) {
  if (typeof (node.selectSingleNode) != "undefined") {
   return node.selectSingleNode(elementName);
  }
  else {
   return node.getElementsByTagName(elementName)[0];
  }
 };
 SDK.Util.selectNodes = function (node, elementName) {
  if (typeof (node.selectNodes) != "undefined") {
   return node.selectNodes(elementName);
  }
  else {
   return node.getElementsByTagName(elementName);
  }
 };

// </snippetSDK.DependentOptionSet.js>
