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
// <snippetSDK.SOAPSample.Assign.js>
if (typeof (SDK) == "undefined")
{ SDK = { __namespace: true }; }
//This will establish a more unique namespace for functions in this library. This will reduce the 
// potential for functions to be overwritten due to a duplicate name when the library is loaded.
SDK.SOAPSamples = {
 _getClientUrl: function () {
  ///<summary>
  /// Returns the URL for the SOAP endpoint using the context information available in the form
  /// or HTML Web resource.
  ///</summary
  var OrgServicePath = "/XRMServices/2011/Organization.svc/web";
  var clientUrl = "";
  if (typeof GetGlobalContext == "function") {
   var context = GetGlobalContext();
   clientUrl = context.getClientUrl();
  }
  else {
   if (typeof Xrm.Page.context == "object") {
    clientUrl = Xrm.Page.context.getClientUrl();
   }
   else
   { throw new Error("Unable to access the server URL"); }
  }

  return clientUrl + OrgServicePath;
 },
 assignRequest: function (Assignee, Target, Type, successCallback, errorCallback) {
  ///<summary>
  /// Sends the Assign Request
  ///</summary>
  this._parameterCheck(Assignee, "GUID", "The SDK.SOAPSamples.assignRequest method Assignee parameter must be a string Representing a GUID value.");
  ///<param name="Assignee" Type="String">
  /// The GUID representing the  System user that the record will be assigned to.
  ///</param>
  this._parameterCheck(Target, "GUID", "The SDK.SOAPSamples.assignRequest method Target parameter must be a string Representing a GUID value.");
  ///<param name="Target" Type="String">
  /// The GUID representing the user-owned entity record that will be assigne to the Assignee.
  ///</param>
  this._parameterCheck(Type, "String", "The SDK.SOAPSamples.assignRequest method Type parameter must be a string value.");
  Type = Type.toLowerCase();
  ///<param name="Type" Type="String">
  /// The Logical name of the user-owned entity. For example, 'account'.
  ///</param>
  if (successCallback != null)
  this._parameterCheck(successCallback, "Function", "The SDK.SOAPSamples.assignRequest method successCallback parameter must be a function.");
  ///<param name="successCallback" Type="Function">
  /// The function to perform when an successfult response is returned.
  ///</param>
  this._parameterCheck(errorCallback, "Function", "The SDK.SOAPSamples.assignRequest method errorCallback parameter must be a function.");
  ///<param name="errorCallback" Type="Function">
  /// The function to perform when an error is returned.
  ///</param>
  //The request is simply the soap envelope captured by the SOAPLogger with variables added for the 
  // values passed. All quotations must be escaped to create valid JScript strings.
  var request = [];

     request.push("<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\">");
     request.push("<s:Body>");
     request.push("<Execute xmlns=\"http://schemas.microsoft.com/xrm/2011/Contracts/Services\"");
     request.push(" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\">");
     request.push("<request i:type=\"b:AssignRequest\"");
     request.push(" xmlns:a=\"http://schemas.microsoft.com/xrm/2011/Contracts\"");
     request.push(" xmlns:b=\"http://schemas.microsoft.com/crm/2011/Contracts\">");
     request.push("<a:Parameters xmlns:c=\"http://schemas.datacontract.org/2004/07/System.Collections.Generic\">");
     request.push("<a:KeyValuePairOfstringanyType>");
     request.push("<c:key>Target</c:key>");
     request.push("<c:value i:type=\"a:EntityReference\">");
     request.push("<a:Id>" + this._xmlEncode(Target) + "</a:Id>");
     request.push("<a:LogicalName>" + this._xmlEncode(Type) + "</a:LogicalName>");
     request.push("<a:Name i:nil=\"true\" />");
     request.push("</c:value>");
     request.push("</a:KeyValuePairOfstringanyType>");
     request.push("<a:KeyValuePairOfstringanyType>");
     request.push("<c:key>Assignee</c:key>");
     request.push("<c:value i:type=\"a:EntityReference\">");
     request.push("<a:Id>" + this._xmlEncode(Assignee) + "</a:Id>");
     request.push("<a:LogicalName>systemuser</a:LogicalName>");
     request.push("<a:Name i:nil=\"true\" />");
     request.push("</c:value>");
     request.push("</a:KeyValuePairOfstringanyType>");
     request.push("</a:Parameters>");
     request.push("<a:RequestId i:nil=\"true\" />");
     request.push("<a:RequestName>Assign</a:RequestName>");
     request.push("</request>");
     request.push("</Execute>");
     request.push("</s:Body>");
     request.push("</s:Envelope>");

  var req = new XMLHttpRequest();
  req.open("POST", SDK.SOAPSamples._getClientUrl(), true)
  // Responses will return XML. It isn't possible to return JSON.
  req.setRequestHeader("Accept", "application/xml, text/xml, */*");
  req.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
  req.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/xrm/2011/Contracts/Services/IOrganizationService/Execute");
  req.onreadystatechange = function () { SDK.SOAPSamples.assignResponse(req, successCallback, errorCallback); };
  req.send(request.join(""));

 },
 assignResponse: function (req, successCallback, errorCallback) {
  ///<summary>
  /// Recieves the assign response
  ///</summary>
  ///<param name="req" Type="XMLHttpRequest">
  /// The XMLHttpRequest response
  ///</param>
  ///<param name="successCallback" Type="Function">
  /// The function to perform when an successfult response is returned.
  /// For this message no data is returned so a success callback is not really necessary.
  ///</param>
  ///<param name="errorCallback" Type="Function">
  /// The function to perform when an error is returned.
  /// This function accepts a JScript error returned by the _getError function
  ///</param>
     if (req.readyState == 4) {
         req.onreadystatechange = null; //avoids memory leaks
   if (req.status == 200) {
    if (successCallback != null)
    { successCallback(); }
   }
   else {
    errorCallback(SDK.SOAPSamples._getError(req.responseXML));
   }
  }
 },
 _getError: function (faultXml) {
  ///<summary>
  /// Parses the WCF fault returned in the event of an error.
  ///</summary>
  ///<param name="faultXml" Type="XML">
  /// The responseXML property of the XMLHttpRequest response.
  ///</param>
  var errorMessage = "Unknown Error (Unable to parse the fault)";
  if (typeof faultXml == "object") {
   try {
    var bodyNode = faultXml.firstChild.firstChild;
    //Retrieve the fault node
    for (var i = 0; i < bodyNode.childNodes.length; i++) {
     var node = bodyNode.childNodes[i];

     //NOTE: This comparison does not handle the case where the XML namespace changes
     if ("s:Fault" == node.nodeName) {
      for (var j = 0; j < node.childNodes.length; j++) {
       var faultStringNode = node.childNodes[j];
       if ("faultstring" == faultStringNode.nodeName) {
        errorMessage = faultStringNode.textContent;
        break;
       }
      }
      break;
     }
    }
   }
   catch (e) { };
  }
  return new Error(errorMessage);
 },
 _xmlEncode: function (strInput) {
  var c;
  var XmlEncode = '';

  if (strInput == null) {
   return null;
  }
  if (strInput == '') {
   return '';
  }

  for (var cnt = 0; cnt < strInput.length; cnt++) {
   c = strInput.charCodeAt(cnt);

   if (((c > 96) && (c < 123)) ||
			((c > 64) && (c < 91)) ||
			(c == 32) ||
			((c > 47) && (c < 58)) ||
			(c == 46) ||
			(c == 44) ||
			(c == 45) ||
			(c == 95)) {
    XmlEncode = XmlEncode + String.fromCharCode(c);
   }
   else {
    XmlEncode = XmlEncode + '&#' + c + ';';
   }
  }

  return XmlEncode;
 },
 _parameterCheck: function (parameter, type, errorMessage) {
  switch (type) {
   case "String":
    if (typeof parameter != "string") {
     throw new Error(errorMessage);
    }
    break;
   case "Function":
    if (typeof parameter != "function") {
     throw new Error(errorMessage);
    }
    break;
   case "EntityFilters":
    var found = false;
    for (x in this.EntityFilters) {
     if (this.EntityFilters[x] == parameter) {
      found = true;
      break;
     }
    }
    if (!found) {
     throw new Error(errorMessage);
    }
    break;
   case "Boolean":
    if (typeof parameter != "boolean") {
     throw new Error(errorMessage);
    }
    break;
   case "GUID":
    var re = new RegExp("[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}");
    if (!(typeof parameter == "string" && re.test(parameter))) {
     throw new Error(errorMessage);
    }

    break;
   default:
    throw new Error("An invalid type parameter value was passed to the SDK.MetaData._parameterCheck function.");
    break;
  }
 },
 __namespace: true
};
// </snippetSDK.SOAPSample.Assign.js>