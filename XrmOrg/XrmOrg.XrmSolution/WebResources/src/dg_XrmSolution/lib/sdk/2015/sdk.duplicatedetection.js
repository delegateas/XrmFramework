SDK = window.SDK || { __namespace: true };
SDK.Sample = SDK.Sample || { __namespace: true };
SDK.Sample.DuplicateDetection = SDK.Sample.DuplicateDetection || { __namespace: true };
SDK.Sample.SOAP = SDK.Sample.SOAP || { __namespace: true };


(function () {

 this.allowSave = false;
 this.allowNavigateAway = false;
 this.saveMode = 0 //Not a valid save mode
 this.modalDialogArgs = "dialogHeight: 250; dialogWidth: 600; resizable: yes; status: No;";
 this.webResource = "";
 this.onSave = function (eContext, disableAutoSave, matchingEntityName, primaryIdAttribute, attributeParams, webResource, modalDialogArgs) {

  if (Xrm.Page.context.client.getClient() == "Mobile") {
   //Disabling for CRM for tablets
   return;
  }

  if (typeof disableAutoSave != "boolean") {
   throw new Error("SDK.Sample.DuplicateDetection.onSave disableAutoSave parameter is required and must be a boolean.");
  }

  //Prevent Auto Save
  if (disableAutoSave) {
   if (eContext.getEventArgs().getSaveMode() == 70) {
    eContext.getEventArgs().preventDefault();
    return;
   }
  }

  if (typeof matchingEntityName != "string") {
   throw new Error("SDK.Sample.DuplicateDetection.onSave matchingEntityName parameter is required and must be a string.");
  }

  if (typeof primaryIdAttribute != "string") {
   throw new Error("SDK.Sample.DuplicateDetection.onSave primaryIdAttribute parameter is required and must be a string.");
  }

  if (typeof attributeParams.join != "function") {
   throw new Error("SDK.Sample.DuplicateDetection.onSave attributeParams parameter is required and must be an Array.");
  }
  else {
   if (attributeParams.length == 0) {
    throw new Error("SDK.Sample.DuplicateDetection.onSave attributeParams parameter must contain attribute logical names.");
   }
  }

  if (typeof webResource != "string") {
   throw new Error("SDK.Sample.DuplicateDetection.onSave webResource parameter is required and must be a string.");
  }
  else {
   SDK.Sample.DuplicateDetection.webResource = webResource;
  }

  if (typeof modalDialogArgs != "string") {
   throw new Error("SDK.Sample.DuplicateDetection.onSave modalDialogArgs parameter is required and must be a string.");
  }
  else {
   SDK.Sample.DuplicateDetection.modalDialogArgs = modalDialogArgs;
  }




  var formType = Xrm.Page.ui.getFormType();
// Only for Create forms
   if (formType == 1) //create (1) 
  {
   SDK.Sample.DuplicateDetection.saveMode = eContext.getEventArgs().getSaveMode();
   if (!SDK.Sample.DuplicateDetection.allowSave) {
    eContext.getEventArgs().preventDefault();
    var attributes = [];

    for (var i = 0; i < attributeParams.length; i++) {
     try {
      attributes.push(new SDK.Sample.DuplicateDetection.Attribute(Xrm.Page.getAttribute(attributeParams[i])));
     }
     catch (e) {
      // Some attributes, like composite attributes, are not in all forms.
     }
    }
    if (!SDK.Sample.DuplicateDetection.allowNavigateAway)
    {
     var recordId = Xrm.Page.data.entity.getId();
     var request = new SDK.Sample.DuplicateDetection.Request(
      Xrm.Page.data.entity.getEntityName(),
      matchingEntityName,
      primaryIdAttribute,
      attributes,
      recordId);
     request.Execute(
      SDK.Sample.DuplicateDetection.manageDuplicates,
      function (error) { Xrm.Utility.alertDialog(error.message); });
    }

   }
  }
 };
 this.manageDuplicates = function (response) {
  var duplicates = response.getDuplicateRecords();
  if (duplicates.length == 0) {

   SDK.Sample.DuplicateDetection.saveRecord();
  }
  else {
   if (Xrm.Page.context.client.getClient() != "Mobile") {

    //Firefox ignores the center argument so try to simulate it
    var dialogArgs = SDK.Sample.DuplicateDetection.modalDialogArgs.replace(/\s+/g, "").split(";");
    var dialogHeight,dialogWidth,dialogLeft,dialogTop;
    for (var i = 0; i < dialogArgs.length; i++) {
     if (dialogArgs[i].indexOf("dialogHeight") == 0)
     {
      dialogHeight = parseInt(dialogArgs[i].split(":")[1].replace("px", ""));
     }
     if (dialogArgs[i].indexOf("dialogWidth") == 0) {
      dialogWidth = parseInt(dialogArgs[i].split(":")[1].replace("px", ""));
     }
    }
    dialogLeft = (document.body.clientWidth - dialogWidth) / 2;
    dialogTop = (document.body.clientHeight - dialogHeight) / 2;
    SDK.Sample.DuplicateDetection.modalDialogArgs += " dialogLeft: " + dialogLeft + "px; dialogTop: " + dialogTop + "px;";



    try {
     var dialogResults = window.showModalDialog(
        Xrm.Page.context.getClientUrl() + "/webresources/" +
        SDK.Sample.DuplicateDetection.webResource,
        duplicates,
        SDK.Sample.DuplicateDetection.modalDialogArgs
        );

     switch (dialogResults) {
      case "save":
       SDK.Sample.DuplicateDetection.saveRecord();
       break;
      case "cancel":
       break;
      default:
       if (typeof dialogResults != undefined && dialogResults != null)
       {
        if ((typeof dialogResults.type != undefined && dialogResults.type != null) &&
         (typeof dialogResults.id != undefined && dialogResults.id != null)) {
         SDK.Sample.DuplicateDetection.allowNavigateAway = true;
         Xrm.Utility.openEntityForm(dialogResults.type, dialogResults.id);
        }
       }
       break;
     }
    }
    catch (e) {
     SDK.Sample.writeToConsole(e.message);
     //For IE only
     if (e.number == -2147024891)
     {
      SDK.Sample.DuplicateDetection.showPopUpBlockerMessage();
     }
    }
   }
  }
 };
 this.saveRecord = function () {
  SDK.Sample.DuplicateDetection.allowSave = true;
  switch (SDK.Sample.DuplicateDetection.saveMode) {
   case 2:
    Xrm.Page.data.entity.save("saveandclose");
    break;
   case 59:
    Xrm.Page.data.entity.save("saveandnew");
    break;
   default:
    Xrm.Page.data.entity.save();
    break;
  }
 };
 this.showPopUpBlockerMessage = function () {
  Xrm.Page.ui.setFormNotification("Please allow pop-ups for this site so you can resolve potential duplicate records.", "INFO", "AllowPopUpsForDuplicateDetection");

  setTimeout(function () {
   Xrm.Page.ui.clearFormNotification("AllowPopUpsForDuplicateDetection");
  }, 5000);
 }


 this.Request = function (entityName, matchingEntityName, primaryIdAttribute, attributes, id) {
  ///<summary>
  /// Performs a request to check for duplicate records
  ///</summary>
  ///<param name="entityName" type="String">
  /// The logical name of the current entity.
  ///</param>
  ///<param name="matchingEntityName" type="String">
  /// The logical name of the entity to check for duplicates
  ///</param>
  ///<param name="primaryIdAttribute" type="String">
  /// The logical name of the PrimaryId attribute for the matching Entity
  ///</param>
  ///<param name="attributes" type="Array">
  /// An array of SDK.Sample.DuplicateDetection.Attribute representing string attributes used in the duplicate detection rule and found in the form
  ///</param>
  ///<param name="id" type="String">
  /// The id value of the record
  ///</param>
  var _entityName, _matchingEntityName, _primaryIdAttribute, _attributes, _id;

  if (typeof entityName == "string") {
   _entityName = entityName;
  }
  else {
   throw new Error("SDK.Sample.DuplicateDetection entityName constructor parameter is required and must be a string.");
  }

  if (typeof matchingEntityName == "string") {
   _matchingEntityName = matchingEntityName;
  }
  else {
   throw new Error("SDK.Sample.DuplicateDetection matchingEntityName constructor parameter is required and must be a string.");
  }

  if (typeof primaryIdAttribute == "string") {
   _primaryIdAttribute = primaryIdAttribute;
  }
  else {
   throw new Error("SDK.Sample.DuplicateDetection primaryIdAttribute constructor parameter is required and must be a string.");
  }

  if ((typeof attributes.join == "function") && (attributes.length > 0)) {
   for (var i = 0; i < attributes.length; i++) {
    if (!attributes[i] instanceof SDK.Sample.DuplicateDetection.Attribute) {
     throw new Error("SDK.Sample.DuplicateDetection attributes attributes parameter must be an array of SDK.Sample.DuplicateDetection.Attribute values.");
    }
   }
   _attributes = attributes;
  }
  else {
   throw new Error("SDK.Sample.DuplicateDetection attributes constructor parameter is required and must be an array with values.");
  }

  if (id == null || id == "") {
   _id = "00000000-0000-0000-0000-000000000000";
  }
  else {
   var errorMessage = "SDK.Sample.DuplicateDetection id constructor parameter is required and must be a string representation of a GUID value.";
   id = id.replace("{", "").replace("}", "");
   if (typeof id == "string") {
    if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
     _id = id;
    }
    else { throw new Error(errorMessage) }
   }
   else { throw new Error(errorMessage) }
  }

  var _requestXml = [
"<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">",
"<s:Body>",
 "<Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\"",
 " xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">",
  "<request i:type=\"b:RetrieveDuplicatesRequest\"",
  " xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\"",
  " xmlns:b=\"http://schemas.microsoft.com/crm/2011/Contracts\">",
   "<a:Parameters xmlns:c=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">",
    "<a:KeyValuePairOfstringanyType>",
     "<c:key>BusinessEntity</c:key>",
     "<c:value i:type=\"a:Entity\">",
     "<a:Attributes>",
       _attributes.join(""),
      "</a:Attributes>",
     "<a:EntityState i:nil=\"true\" />",
     "<a:FormattedValues />",
     "<a:Id>" + _id + "</a:Id>",
     "<a:LogicalName>" + _entityName + "</a:LogicalName>",
     "<a:RelatedEntities />",
     "</c:value>",
    "</a:KeyValuePairOfstringanyType>",
    "<a:KeyValuePairOfstringanyType>",
     "<c:key>MatchingEntityName</c:key>",
     "<c:value i:type=\"d:string\"",
     " xmlns:d=\"http://www.w3.org/2001/XMLSchema\">" + _matchingEntityName + "</c:value>",
    "</a:KeyValuePairOfstringanyType>",
    "<a:KeyValuePairOfstringanyType>",
     "<c:key>PagingInfo</c:key>",
      "<c:value i:type=\"a:PagingInfo\">",
       "<a:Count>50</a:Count>", //leaving this hard-coded
       "<a:PageNumber>1</a:PageNumber>", //leaving this hard-coded
       "<a:PagingCookie i:nil=\"true\" />",
       "<a:ReturnTotalRecordCount>false</a:ReturnTotalRecordCount>",
      "</c:value>",
     "</a:KeyValuePairOfstringanyType>",
    "</a:Parameters>",
   "<a:RequestId i:nil=\"true\" />",
   "<a:RequestName>RetrieveDuplicates</a:RequestName>",
  "</request>",
 "</Execute>",
"</s:Body>",
"</s:Envelope>"];

  this.Execute = function (successCallBack, errorCallback) {

   SDK.Sample.SOAP.Execute(_requestXml.join(""), successCallBack, errorCallback, SDK.Sample.DuplicateDetection.Response, { attributes: _attributes, primaryIdAttribute: _primaryIdAttribute });
  }

 };
 this.Request.__class = true;
 this.Response = function (responseXml, data) {
  var _duplicateRecords = [];
  var _attributes = data.attributes;
  var _primaryIdAttribute = data.primaryIdAttribute;

  function _init() {
   //Parse the constructor parameters
   var doc = responseXml;
   try { _setSelectionNamespaces(doc); } catch (e) { };
   var duplicates = _selectNodes(doc, "//c:value[@i:type='a:EntityCollection']/a:Entities/a:Entity");
   for (var i = 0; i < duplicates.length; i++) {
    var duplicateRecord = _objectifyRecord(duplicates[i].cloneNode(true));
    _duplicateRecords.push(duplicateRecord);
   }
  }

  function _NSResolver(prefix) {
   var ns = {
    "s": "http://schemas.xmlsoap.org/soap/envelope/",
    "a": "http://schemas.microsoft.com/xrm/2011/Contracts",
    "i": "http://www.w3.org/2001/XMLSchema-instance",
    "b": "http://schemas.microsoft.com/crm/2011/Contracts",
    "c": "http://schemas.datacontract.org/2004/07/System.Collections.Generic"
   };
   return ns[prefix] || null;
  }

  function _setSelectionNamespaces(doc) {
   var namespaces = [
"xmlns:s='http://schemas.xmlsoap.org/soap/envelope/'",
"xmlns:a='http://schemas.microsoft.com/xrm/2011/Contracts'",
"xmlns:i='http://www.w3.org/2001/XMLSchema-instance'",
"xmlns:b='http://schemas.microsoft.com/crm/2011/Contracts'",
"xmlns:c='http://schemas.datacontract.org/2004/07/System.Collections.Generic'"
   ];
   doc.setProperty("SelectionNamespaces", namespaces.join(" "));
  }

  function _isNodeNull(node) {
   if (node == null)
   { return true; }
   if ((node.attributes.getNamedItem("i:nil") != null) && (node.attributes.getNamedItem("i:nil").value == "true"))
   { return true; }
   return false;
  }

  function _selectNodes(node, xpathExpr) {
   if (typeof (node.selectNodes) != "undefined") {
    return node.selectNodes(xpathExpr);
   }
   else {
    var output = [];
    var XPathResults = node.evaluate(xpathExpr, node, _NSResolver, XPathResult.ANY_TYPE, null);
    var result = XPathResults.iterateNext();
    while (result) {
     output.push(result);
     result = XPathResults.iterateNext();
    }
    return output;
   }
  }

  function _selectSingleNode(node, xpathExpr) {
   if (typeof (node.selectSingleNode) != "undefined") {
    return node.selectSingleNode(xpathExpr);
   }
   else {
    var xpe = new XPathEvaluator();
    var xPathNode = xpe.evaluate(xpathExpr, node, _NSResolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return (xPathNode != null) ? xPathNode.singleNodeValue : null;
   }
  }

  function _selectSingleNodeText(node, xpathExpr) {
   var x = _selectSingleNode(node, xpathExpr);
   if (_isNodeNull(x))
   { return null; }
   if (typeof (x.text) != "undefined") {
    return x.text;
   }
   else {
    return x.textContent;
   }
  }

  function _objectifyRecord(recordXml) {
   //Not setting actual types, just string values to display
   var record = {};

   record.id = _selectSingleNodeText(recordXml, "//a:Attributes/a:KeyValuePairOfstringanyType[c:key = '" + _primaryIdAttribute.toLowerCase() + "']/c:value");

   for (var i = 0; i < _attributes.length; i++) {
    var type = _attributes[i].getType();
    var attributeName = _attributes[i].getName();
    switch (type) {
     case "string":
     case "memo":
      record[attributeName] = _selectSingleNodeText(recordXml, "//a:Attributes/a:KeyValuePairOfstringanyType[c:key = '" + attributeName + "']/c:value");
      break;
     case "lookup":
      record[attributeName] = _selectSingleNodeText(recordXml, "//a:Attributes/a:KeyValuePairOfstringanyType[c:key = '" + attributeName + "']/c:value/a:Name");
      break;
     case "boolean":
     case "optionset":
     case "datetime":
     case "decimal":
     case "integer":
     case "double":
      record[attributeName] = _selectSingleNodeText(recordXml, "//a:FormattedValues/a:KeyValuePairOfstringstring[c:key = '" + attributeName + "']/c:value");
      break;
     case "money":

      record[attributeName] = _selectSingleNodeText(recordXml, "//a:FormattedValues/a:KeyValuePairOfstringstring[c:key = '" + attributeName + "']/c:value");
      break;
     default:
      throw new Error("SDK.Sample.DuplicateDetection.Response has only implemented support for string attributes.");
      break;
    }
   }
   return record;
  }

  this.getDuplicateRecords = function () {
   return _duplicateRecords;
  }

  _init();

 };
 this.Response.__class = true;


 this.Attribute = function (attribute) {
  var _name, _type, _value;
  try {
   _name = attribute.getName();
  }
  catch (e) {
   throw new Error("SDK.Sample.DuplicateDetection.Attribute attribute.getName failed.")
  }
  try {
   _type = attribute.getAttributeType();
  }
  catch (e) {
   throw new Error("SDK.Sample.DuplicateDetection.Attribute attribute.getAttributeType failed.")
  }
  try {
   _value = attribute.getValue();
  }
  catch (e) {
   throw new Error("SDK.Sample.DuplicateDetection.Attribute attribute.getValue failed.")
  }
  this.getName = function () {
   return _name;
  }
  this.getType = function () {
   return _type;
  }
  this.getValue = function () {
   return _value;
  }

 };
 this.Attribute.__class = true;

}).call(SDK.Sample.DuplicateDetection);



(function () {
 this.Execute = function (requestXml, successCallBack, errorCallBack, responseType, passThruObj) {
  ///<summary>
  /// Executes a SOAP Request using the SOAPAction Execute
  ///</summary>
  ///<param name="requestXml" type="String">
  /// Required. A string containing the XML for the request
  ///</param>
  ///<param name="successCallBack" type="Function">
  /// <para>A function to process a successful response. </para>
  /// <para>If responseType is specified, returns an instance of that function passed the responseXML as a parameter.</para>
  /// <para>If responseType is not specified, the responseXML is passed as a parameter.</para>
  ///</param>
  ///<param name="errorCallBack" type="Function">
  /// <para>A function to process an unsuccessful response. </para>
  /// <para>An error object is passed as the parameter</para>
  ///</param>
  ///<param name="responseType" type="Function">
  /// A function representing a class that can be instantiated based on the responseXML from the response
  ///</param>
  ///<param name="passThruObj" type="Object">
  /// An object to be passed through as the second parameter to the successCallBack and the errorCallBack;
  ///</param>

  if (typeof requestXml != "string") {
   throw new Error("SDK.Sample.SOAP.Execute requestXml parameter must be a string.");
  }

  if ((successCallBack != null) && (typeof successCallBack != "function")) {
   throw new Error("SDK.Sample.SOAP.Execute successCallBack parameter must be null or a function.");
  }

  if ((errorCallBack != null) && (typeof errorCallBack != "function")) {
   throw new Error("SDK.Sample.SOAP.Execute errorCallBack parameter must be null or a function.");
  }

  if ((responseType != null) && (typeof responseType != "function")) {
   throw new Error("SDK.Sample.SOAP.Execute responseType parameter must be null or a function.");
  }

  var clientUrl = "";
  if (typeof GetGlobalContext == "function")
  { clientUrl = GetGlobalContext().getClientUrl(); }
  else
  {
   if (typeof Xrm != "undefined") {
    if (typeof Xrm.Page != "undefined") {
     if (typeof Xrm.Page.context != "undefined") {
      clientUrl = Xrm.Page.context.getClientUrl();
     }
    }
   }
  }
  if (clientUrl == "")
  { throw new Error("Unable to get clientUrl context not available."); }



  function _getError(faultXML) {
   
   var errorMessage = "Unknown Error (Unable to parse the fault)";
   if (typeof faultXML == "object") {
    try {
     var bodyNode = faultXML.firstChild.firstChild;
     //Retrieve the fault node
     for (var i = 0; i < bodyNode.childNodes.length; i++) {
      var node = bodyNode.childNodes[i];
      //NOTE: This comparison does not handle the case where the XML namespace changes
      if ("s:Fault" == node.nodeName) {
       for (var j = 0; j < node.childNodes.length; j++) {
        var faultStringNode = node.childNodes[j];
        if ("faultstring" == faultStringNode.nodeName) {
         errorMessage = faultStringNode.text;
         break;
        }
       }
       break;
      }
     }
    }
    catch (e) {
     SDK.Sample.writeToConsole("error message:"+ e.message);
     SDK.Sample.writeToConsole(faultXML);
    };
   }
   return new Error(errorMessage);
  };




  var req = new XMLHttpRequest();
  req.open("POST", clientUrl + "/XRMServices/2011/Organization.svc/web", true)
  try { req.responseType = 'msxml-document' } catch (e) { }
  req.setRequestHeader("Accept", "application/xml, text/xml, */*");
  req.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
  req.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
  req.onreadystatechange = function () {
   if (req.readyState == 4) {
    req.onreadystatechange = null;
    if (req.status == 200) {
     var doc = req.responseXML;
     if (responseType != null && typeof responseType != "undefined") {
      successCallBack(new responseType(doc, passThruObj));
     }
     else {
      successCallBack(doc, passThruObj);
     }
    }
    else {
     if (req.status != 0)
     {
      //Getting unexpected null responseXml when req.status == 0 in Chrome
      errorCallBack(_getError(req.responseXML), passThruObj);
     }
     
    }
   }
  };
  req.send(requestXml);
 };
}).call(SDK.Sample.SOAP);


// Using prototype so that this function doesn't need to be bound within each instance of the 
// SDK.Sample.DuplicateDetection.Attribute class.
SDK.Sample.DuplicateDetection.Attribute.prototype.toString = function () {
 var xml = ["<a:KeyValuePairOfstringanyType>"];
 xml.push("<c:key>" + this.getName() + "</c:key>")
 if (this.getValue() == null) {
  xml.push("<c:value i:nil=\"true\" />")
 }
 else {
  var type = this.getType();
  switch (type) {
   case "string":
   case "boolean":
   case "decimal":
   case "double":
    xml.push("<c:value i:type=\"d:" + this.getType() + "\"")
    xml.push(" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">" + this.getValue() + "</c:value>")
    break;
   case "datetime":
    xml.push("<c:value i:type=\"d:dateTime\"")
    xml.push(" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">" + this.getValue().toISOString() + "</c:value>")
    break;
   case "integer":
    xml.push("<c:value i:type=\"d:int\"")
    xml.push(" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">" + this.getValue() + "</c:value>")
    break;
   case "lookup":
    xml.push("<c:value i:type=\"a:EntityReference\">");
    xml.push("<a:Id>" + this.getValue()[0].id + "</a:Id>");
    xml.push("<a:LogicalName>" + this.getValue()[0].entityType + "</a:LogicalName>");
    xml.push("<a:Name>" + this.getValue()[0].name + "</a:Name>");
    xml.push("</c:value>");
    break;
   case "memo":
    xml.push("<c:value i:type=\"d:string\"")
    xml.push(" xmlns:d=\"http://www.w3.org/2001/XMLSchema\">" + this.getValue() + "</c:value>")
    break;
   case "money":
    xml.push("<c:value i:type=\"a:Money\">");
    xml.push("<a:Value>" + this.getValue() + "</a:Value>");
    xml.push("</c:value>");
    break;
   case "optionset":
    xml.push("<c:value i:type=\"a:OptionSetValue\">");
    xml.push("<a:Value>" + this.getValue() + "</a:Value>");
    xml.push("</c:value>");
    break;
   default:
    throw new Error("SDK.Sample.DuplicateDetection.Attribute has not implemented '" + type + "' type attributes.");
    break;
  }

 }
 xml.push("</a:KeyValuePairOfstringanyType>")
 return xml.join("");
}

//Helper function for debugging
SDK.Sample.writeToConsole = function (message) {
 if (window.console) {
  window.console.log(message);
 }

}


