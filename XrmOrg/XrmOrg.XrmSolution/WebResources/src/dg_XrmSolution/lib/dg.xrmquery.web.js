var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var XrmQuery;
(function (XrmQuery) {
    /**
     * Instantiates specification of a query that can retrieve a specific record.
     * @param entityPicker Function to select which entity-type should be targeted.
     * @param id GUID of the wanted record.
     */
    function retrieve(entityPicker, id) {
        return XQW.RetrieveRecord.Get(entityPicker, id);
    }
    XrmQuery.retrieve = retrieve;
    /**
     * Instantiates specification of a query that can retrieve multiple records of a certain entity.
     * @param entityPicker Function to select which entity should be targeted.
     */
    function retrieveMultiple(entityPicker) {
        return XQW.RetrieveMultipleRecords.Get(entityPicker);
    }
    XrmQuery.retrieveMultiple = retrieveMultiple;
    /**
     * Instantiates specification of a query that can retrieve a related record of a given record.
     * @param entityPicker Function to select which entity-type the related record should be retrieved from.
     * @param id GUID of the record of which the related record should be retrieved.
     * @param relatedPicker Function to select which navigation property points to the related record.
     */
    function retrieveRelated(entityPicker, id, relatedPicker) {
        return XQW.RetrieveRecord.Related(entityPicker, id, relatedPicker);
    }
    XrmQuery.retrieveRelated = retrieveRelated;
    /**
     * Instantiates specification of a query that can retrieve multiple related records of a given record.
     * @param entityPicker  Function to select which entity-type the related records should be retrieved from.
     * @param id GUID of the record of which the related records should be retrieved.
     * @param relatedPicker Function to select which navigation property points to the related records.
     */
    function retrieveRelatedMultiple(entityPicker, id, relatedPicker) {
        return XQW.RetrieveMultipleRecords.Related(entityPicker, id, relatedPicker);
    }
    XrmQuery.retrieveRelatedMultiple = retrieveRelatedMultiple;
    /**
     * Instantiates a query that can create a record.
     * @param entityPicker Function to select which entity-type should be created.
     * @param record Object of the record to be created.
     */
    function create(entityPicker, record) {
        return new XQW.CreateRecord(entityPicker, record);
    }
    XrmQuery.create = create;
    /**
     * Instantiates a query that can update a specific record.
     * @param entityPicker Function to select which entity-type should be updated.
     * @param id GUID of the record to be updated.
     * @param record Object containing the attributes to be updated.
     */
    function update(entityPicker, id, record) {
        return new XQW.UpdateRecord(entityPicker, id, record);
    }
    XrmQuery.update = update;
    /**
     * Instantiates a query that can associate two specific records with a N:1 relation.
     * @param entityPicker Function to select the entity-type of the source entity.
     * @param id GUID of the source entity.
     * @param entityTargetPicker Function to select the entity-type of the target entity.
     * @param targetId GUID of the target entity.
     * @param relationPicker Function to select which N:1 relation (lookup-field) should be used to associate.
     */
    function associateSingle(entityPicker, id, entityTargetPicker, targetId, relationPicker) {
        return new XQW.AssociateRecordSingle(entityPicker, id, entityTargetPicker, targetId, relationPicker);
    }
    XrmQuery.associateSingle = associateSingle;
    /**
     * Instantiates a query that can associate two specific records with a N:N or 1:N relation.
     * @param entityPicker Function to select the entity-type of the source entity.
     * @param id GUID of the source entity.
     * @param entityTargetPicker Function to select the entity-type of the target entity.
     * @param targetId GUID of the target entity.
     * @param relationPicker Function to select which N:N or 1:N relation should be used to associate.
     */
    function associateCollection(entityPicker, id, entityTargetPicker, targetId, relationPicker) {
        return new XQW.AssociateRecordCollection(entityPicker, id, entityTargetPicker, targetId, relationPicker);
    }
    XrmQuery.associateCollection = associateCollection;
    /**
     * Instantiates a query that can disassociate two specific records with a N:1 relation.
     * @param entityPicker Function to select the entity-type of the source entity.
     * @param id GUID of the source entity.
     * @param relationPicker Function to select which N:1 relation (lookup-field) should be used to disassociate.
     */
    function disassociateSingle(entityPicker, id, relationPicker) {
        return XQW.DisassociateRecord.Single(entityPicker, id, relationPicker);
    }
    XrmQuery.disassociateSingle = disassociateSingle;
    /**
     * Instantiates a query that can disassociate two specific records with a N:N or 1:N relation.
     * @param entityPicker Function to select the entity-type of the source entity.
     * @param id GUID of the source entity.
     * @param relationPicker Function to select which N:N or 1:N relation should be used to disassociate.
     * @param targetId GUID of the target entity.
     */
    function disassociateCollection(entityPicker, id, relationPicker, targetId) {
        return XQW.DisassociateRecord.Collection(entityPicker, id, relationPicker, targetId);
    }
    XrmQuery.disassociateCollection = disassociateCollection;
    /**
     * Instantiates a query that can delete a specific record.
     * @param entityPicker Function to select which entity-type should be deleted.
     * @param id GUID of the record to be updated.
     */
    function deleteRecord(entityPicker, id) {
        return new XQW.DeleteRecord(entityPicker, id);
    }
    XrmQuery.deleteRecord = deleteRecord;
    /**
     * Makes XrmQuery use the given custom url to access the Web API.
     * @param url The url targeting the API. For example: '/api/data/v8.2/'
     */
    function setApiUrl(url) {
        XQW.ApiUrl = url;
    }
    XrmQuery.setApiUrl = setApiUrl;
    /**
     * Makes XrmQuery use the given version to access the Web API.
     * @param v Version to use for the API. For example: '8.2'
     */
    function setApiVersion(v) {
        XQW.ApiUrl = XQW.getDefaultUrl(v);
    }
    XrmQuery.setApiVersion = setApiVersion;
    /**
     * @internal
     */
    function request(type, url, data, successCb, errorCb, preSend, sync) {
        if (errorCb === void 0) { errorCb = function () { }; }
        if (sync === void 0) { sync = false; }
        var req = new XMLHttpRequest();
        req.open(type, url, !sync);
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        if (preSend)
            preSend(req);
        req.onreadystatechange = function () {
            if (this.readyState == 4) {
                req.onreadystatechange = null;
                if (this.status == 200 || this.status == 204)
                    successCb(this);
                else
                    errorCb(new Error(this.response));
            }
        };
        req.send(data);
    }
    XrmQuery.request = request;
    /**
     * Sends a request to the Web API with the given parameters.
     * @param type Type of request, i.e. "GET", "POST", etc
     * @param queryString Query-string to use for the API. For example: 'accounts?$count=true'
     * @param data Object to send with request
     * @param successCb Success callback handler function
     * @param errorCb Error callback handler function
     * @param configure Modify the request before it it sent to the endpoint - like adding headers.
     */
    function sendRequest(type, queryString, data, successCb, errorCb, configure, sync) {
        request(type, encodeSpaces(XQW.getApiUrl() + queryString), data, successCb, errorCb, configure, sync);
    }
    XrmQuery.sendRequest = sendRequest;
    /**
     * Sends a request to the Web API with the given parameters and returns a promise.
     * @param type Type of request, i.e. "GET", "POST", etc
     * @param queryString Query-string to use for the API. For example: 'accounts?$count=true'
     * @param data Object to send with request
     * @param configure Modify the request before it it sent to the endpoint - like adding headers.
     */
    function promiseRequest(type, queryString, data, configure) {
        return XQW.promisifyCallback(function (success, error) { return sendRequest(type, queryString, data, success, error, configure); });
    }
    XrmQuery.promiseRequest = promiseRequest;
    function encodeSpaces(str) {
        return str.replace(/ /g, "%20");
    }
})(XrmQuery || (XrmQuery = {}));
var Filter;
(function (Filter) {
    function equals(v1, v2) {
        return comp(v1, "eq", v2);
    }
    Filter.equals = equals;
    function notEquals(v1, v2) {
        return comp(v1, "ne", v2);
    }
    Filter.notEquals = notEquals;
    function greaterThan(v1, v2) {
        return comp(v1, "gt", v2);
    }
    Filter.greaterThan = greaterThan;
    function greaterThanOrEqual(v1, v2) {
        return comp(v1, "ge", v2);
    }
    Filter.greaterThanOrEqual = greaterThanOrEqual;
    function lessThan(v1, v2) {
        return comp(v1, "lt", v2);
    }
    Filter.lessThan = lessThan;
    function lessThanOrEqual(v1, v2) {
        return comp(v1, "le", v2);
    }
    Filter.lessThanOrEqual = lessThanOrEqual;
    function and(f1, f2) {
        return biFilter(f1, "and", f2);
    }
    Filter.and = and;
    function or(f1, f2) {
        return biFilter(f1, "or", f2);
    }
    Filter.or = or;
    function not(f1) {
        return ("not " + f1);
    }
    Filter.not = not;
    function ands(fs) {
        return nestedFilter(fs, "and");
    }
    Filter.ands = ands;
    function ors(fs) {
        return nestedFilter(fs, "or");
    }
    Filter.ors = ors;
    function startsWith(val, prefix) {
        return dataFunc("startswith", val, prefix);
    }
    Filter.startsWith = startsWith;
    function contains(val, needle) {
        return dataFunc("contains", val, needle);
    }
    Filter.contains = contains;
    function endsWith(val, suffix) {
        return dataFunc("endswith", val, suffix);
    }
    Filter.endsWith = endsWith;
    /**
     * Makes a string into a GUID that can be sent to the OData source
     */
    function makeGuid(id) {
        return XQW.makeTag(XQW.stripGUID(id));
    }
    Filter.makeGuid = makeGuid;
    /**
     * @internal
     */
    function getVal(v) {
        if (v == null)
            return "null";
        if (typeof v === "string")
            return "'" + encodeSpecialCharacters(v) + "'";
        if (v instanceof Date)
            return encodeSpecialCharacters(v.toISOString());
        return encodeSpecialCharacters(v.toString());
    }
    /**
     * @internal
     */
    function comp(val1, op, val2) {
        return (getVal(val1) + " " + op + " " + getVal(val2));
    }
    /**
     * @internal
     */
    function dataFunc(funcName, val1, val2) {
        return (funcName + "(" + getVal(val1) + ", " + getVal(val2) + ")");
    }
    /**
     * @internal
     */
    function biFilter(f1, conj, f2) {
        return ("(" + f1 + " " + conj + " " + f2 + ")");
    }
    /**
     * @internal
     */
    function nestedFilter(fs, conj) {
        var last = fs.pop();
        if (last === undefined) {
            return ("");
        }
        return fs.reduceRight(function (acc, c) { return biFilter(c, conj, acc); }, last);
    }
    /**
     * @internal
     */
    function encodeSpecialCharacters(queryString) {
        return encodeURI(queryString)
            .replace(/'/g, "''")
            .replace(/\+/g, "%2B")
            .replace(/\//g, "%2F")
            .replace(/\?/g, "%3F")
            .replace(/#/g, "%23")
            .replace(/&/g, "%26");
    }
})(Filter || (Filter = {}));
var XQW;
(function (XQW) {
    var FORMATTED_VALUE_ID = "OData.Community.Display.V1.FormattedValue";
    var FORMATTED_VALUE_SUFFIX = "@" + FORMATTED_VALUE_ID;
    var FORMATTED_VALUES_HEADER = { type: "Prefer", value: "odata.include-annotations=\"" + FORMATTED_VALUE_ID + "\"" };
    var LOOKUP_LOGICALNAME_ID = "Microsoft.Dynamics.CRM.lookuplogicalname";
    var LOOKUP_LOGICALNAME_SUFFIX = "@" + LOOKUP_LOGICALNAME_ID;
    var LOOKUP_NAVIGATIONPROPERTY_ID = "Microsoft.Dynamics.CRM.associatednavigationproperty";
    var LOOKUP_NAVIGATIONPROPERTY_SUFFIX = "@" + LOOKUP_NAVIGATIONPROPERTY_ID;
    var INCLUDE_ANNOTATIONS_HEADER = { type: "Prefer", value: "odata.include-annotations=\"*\"" };
    var BIND_ID = "_bind$";
    var ID_ID = "_id$";
    var GUID_ENDING = "_guid";
    var FORMATTED_ENDING = "_formatted";
    var LOOKUP_LOGICALNAME_ENDING = "_lookuplogicalname";
    var LOOKUP_NAVIGATIONPROPERTY_ENDING = "_navigationproperty";
    var NEXT_LINK_ID = "@odata.nextLink";
    var MaxPageSizeHeader = function (size) { return ({ type: "Prefer", value: "odata.maxpagesize=" + size }); };
    function makeTag(name) {
        return { __str: name, toString: function () { return this.__str; } };
    }
    XQW.makeTag = makeTag;
    function endsWith(str, suffix) {
        return str.substr(-suffix.length) == suffix;
    }
    function beginsWith(str, prefix) {
        return str.substr(0, prefix.length) == prefix;
    }
    var datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
    function reviver(name, value) {
        if (datePattern.test(value))
            return new Date(value);
        var newName = name;
        var formatted = endsWith(newName, FORMATTED_VALUE_SUFFIX);
        var lookupLogicalName = endsWith(newName, LOOKUP_LOGICALNAME_SUFFIX);
        var lookupNavProperty = endsWith(newName, LOOKUP_NAVIGATIONPROPERTY_SUFFIX);
        if (formatted)
            newName = newName.substr(0, newName.length - FORMATTED_VALUE_SUFFIX.length);
        else if (lookupLogicalName)
            newName = newName.substr(0, newName.length - LOOKUP_LOGICALNAME_SUFFIX.length);
        else if (lookupNavProperty)
            newName = newName.substr(0, newName.length - LOOKUP_NAVIGATIONPROPERTY_SUFFIX.length);
        if (beginsWith(newName, "_") && endsWith(newName, "_value")) {
            newName = newName.substr(1, newName.length - 7);
            if (formatted)
                newName += FORMATTED_ENDING;
            else if (lookupLogicalName)
                newName += LOOKUP_LOGICALNAME_ENDING;
            else if (lookupNavProperty)
                newName += LOOKUP_NAVIGATIONPROPERTY_ENDING;
            else
                newName += GUID_ENDING;
        }
        else {
            if (formatted)
                newName += FORMATTED_ENDING;
        }
        if (newName != name) {
            this[newName] = value;
        }
        else {
            return value;
        }
    }
    /* A bit slower (but nicer) implementation using RegEx */
    //const pattern = /^(_)?(.+?)(_value)?(@OData\.Community\.Display\.V1\.FormattedValue)?$/;
    //function reviver(name: string, value) {
    //  if (datePattern.test(value)) return new Date(value);
    //  let m = pattern.exec(name);
    //  if (!m) return value;
    //  else if (m[4]) { this[m[2] + "_formatted"] = value; return; }
    //  else if (m[1] && m[3]) { this[m[2] + "_guid"] = value; return; }
    //  else return value;
    //}
    function stripGUID(guid) {
        if (startsWith("{", guid) && endsWith(guid, "}"))
            return guid.substring(1, guid.length - 1);
        else
            return guid;
    }
    XQW.stripGUID = stripGUID;
    function parseRetrievedData(req) {
        return JSON.parse(req.response, reviver);
    }
    function isStringArray(arr) {
        return arr.length > 0 && typeof arr[0] === "string";
    }
    function promisifyCallback(callbackFunc) {
        if (!Promise)
            throw new Error("Promises are not natively supported in this browser. Add a polyfill to use it.");
        return new Promise(function (resolve, reject) {
            callbackFunc(resolve, reject);
        });
    }
    XQW.promisifyCallback = promisifyCallback;
    var LinkHelper = /** @class */ (function () {
        function LinkHelper(toReturn, successCallback, errorCallback) {
            var _this = this;
            this.toReturn = toReturn;
            this.successCallback = successCallback;
            this.errorCallback = errorCallback;
            this.missingCallbacks = 0;
            this.isDoneSending = false;
            this.isDoingWork = false;
            this.callbackReceived = function () {
                _this.missingCallbacks--;
                if (_this.allSent && _this.missingCallbacks == 0) {
                    _this.successCallback(_this.toReturn);
                }
            };
        }
        LinkHelper.prototype.followLink = function (linkUrl, expandKeys, valPlacer) {
            var _this = this;
            this.performingCallback();
            XrmQuery.request("GET", linkUrl, null, function (req) {
                var resp = parseRetrievedData(req);
                PageLinkHelper.followLinks(resp, expandKeys, function (vals) {
                    valPlacer(vals);
                    _this.callbackReceived();
                }, _this.errorCallback);
            }, function (err) {
                _this.callbackReceived();
                _this.errorCallback(err);
            });
        };
        LinkHelper.prototype.populateRecord = function (rec, expandKeys) {
            this.performingCallback();
            EntityLinkHelper.followLinks(rec, expandKeys, this.callbackReceived, this.errorCallback);
        };
        LinkHelper.prototype.allSent = function () {
            if (!this.isDoingWork)
                return this.successCallback(this.toReturn);
            this.isDoneSending = true;
        };
        LinkHelper.prototype.performingCallback = function () {
            this.missingCallbacks++;
            this.isDoingWork = true;
        };
        return LinkHelper;
    }());
    var EntityLinkHelper = /** @class */ (function (_super) {
        __extends(EntityLinkHelper, _super);
        function EntityLinkHelper(rec, expandKeys, successCallback, errorCallback) {
            var _this = _super.call(this, rec, successCallback, errorCallback) || this;
            expandKeys.forEach(function (exp) {
                var linkUrl = rec[exp.linkKey];
                if (linkUrl) {
                    delete rec[exp.linkKey];
                    _this.followLink(linkUrl, [], function (vals) {
                        rec[exp.arrKey] = rec[exp.arrKey].concat(vals);
                    });
                }
            });
            _this.allSent();
            return _this;
        }
        EntityLinkHelper.followLinks = function (rec, expandKeys, successCallback, errorCallback) {
            if (expandKeys.length == 0)
                return successCallback(rec);
            if (isStringArray(expandKeys)) {
                expandKeys = expandKeys.map(function (k) { return ({ arrKey: k, linkKey: k + NEXT_LINK_ID }); });
            }
            return new EntityLinkHelper(rec, expandKeys, successCallback, errorCallback);
        };
        return EntityLinkHelper;
    }(LinkHelper));
    /**
     * Helper class to expand on all @odata.nextLink, both pages and on entities retrieved
     */
    var PageLinkHelper = /** @class */ (function (_super) {
        __extends(PageLinkHelper, _super);
        function PageLinkHelper(obj, expandKeys, successCallback, errorCallback) {
            var _this = _super.call(this, obj.value, successCallback, errorCallback) || this;
            var nextPage = obj["@odata.nextLink"];
            if (nextPage) {
                _this.followLink(nextPage, expandKeys, function (vals) {
                    _this.toReturn = _this.toReturn.concat(vals);
                });
            }
            if (expandKeys.length > 0) {
                obj.value.forEach(function (r) { return _this.populateRecord(r, expandKeys); });
            }
            _this.allSent();
            return _this;
        }
        PageLinkHelper.followLinks = function (obj, expandKeys, successCallback, errorCallback) {
            if (!obj["@odata.nextLink"] && (obj.value.length == 0 || expandKeys.length == 0))
                return successCallback(obj.value);
            if (expandKeys.length == 0) {
                return new PageLinkHelper(obj, [], successCallback, errorCallback);
            }
            if (isStringArray(expandKeys)) {
                expandKeys = expandKeys.map(function (k) { return ({ arrKey: k, linkKey: k + NEXT_LINK_ID }); });
            }
            if (obj.value.length == 0) {
                return new PageLinkHelper(obj, expandKeys, successCallback, errorCallback);
            }
            else {
                // Trim expand keys down to the ones that may have nextLinks
                var firstRec_1 = obj.value[0];
                var toKeep = expandKeys.filter(function (exp) { return firstRec_1[exp.linkKey]; });
                return new PageLinkHelper(obj, toKeep, successCallback, errorCallback);
            }
        };
        return PageLinkHelper;
    }(LinkHelper));
    var Query = /** @class */ (function () {
        function Query(requestType) {
            this.requestType = requestType;
            this.additionalHeaders = [];
            this.getObjectToSend = function () { return null; };
        }
        Query.prototype.promise = function () {
            return promisifyCallback(this.execute.bind(this));
        };
        Query.prototype.execute = function (successCallback, errorCallback) {
            if (errorCallback === void 0) { errorCallback = function () { }; }
            this.executeRaw(successCallback, errorCallback, true, false);
        };
        Query.prototype.executeSync = function () {
            var ret = Error("Undefined behavior");
            this.executeRaw(function (x) { ret = x; }, function (err) { ret = err; }, true, true);
            return ret;
        };
        Query.prototype.executeRaw = function (successCallback, errorCallback, parseResult, sync) {
            var _this = this;
            if (errorCallback === void 0) { errorCallback = function () { }; }
            if (parseResult === void 0) { parseResult = false; }
            if (sync === void 0) { sync = false; }
            var config = function (req) { return _this.additionalHeaders.forEach(function (h) { return req.setRequestHeader(h.type, h.value); }); };
            var successHandler = function (req) { return (parseResult ? _this.handleResponse(req, successCallback, errorCallback) : successCallback(req)); };
            return XrmQuery.sendRequest(this.requestType, this.getQueryString(), this.getObjectToSend(), successHandler, errorCallback, config, sync);
        };
        return Query;
    }());
    XQW.Query = Query;
    var RetrieveMultipleRecords = /** @class */ (function (_super) {
        __extends(RetrieveMultipleRecords, _super);
        function RetrieveMultipleRecords(entitySetName, id, relatedNav) {
            var _this = _super.call(this, "GET") || this;
            _this.entitySetName = entitySetName;
            _this.id = id;
            _this.relatedNav = relatedNav;
            /**
             * @internal
             */
            _this.specialQuery = undefined;
            /**
             * @internal
             */
            _this.selects = [];
            /**
             * @internal
             */
            _this.expands = [];
            /**
             * @internal
             */
            _this.expandKeys = [];
            /**
             * @internal
             */
            _this.ordering = [];
            /**
             * @internal
             */
            _this.skipAmount = null;
            /**
             * @internal
             */
            _this.topAmount = null;
            _this.id = id !== undefined ? stripGUID(id) : id;
            return _this;
        }
        RetrieveMultipleRecords.Get = function (entityPicker) {
            return new RetrieveMultipleRecords(taggedExec(entityPicker).toString());
        };
        RetrieveMultipleRecords.Related = function (entityPicker, id, relatedPicker) {
            return new RetrieveMultipleRecords(taggedExec(entityPicker).toString(), id, taggedExec(relatedPicker).toString());
        };
        RetrieveMultipleRecords.prototype.handleResponse = function (req, successCallback, errorCallback) {
            PageLinkHelper.followLinks(parseRetrievedData(req), this.expandKeys, successCallback, errorCallback);
        };
        RetrieveMultipleRecords.prototype.getFirst = function (successCallback, errorCallback) {
            this.top(1);
            this.execute(function (res) { return successCallback(res && res.length > 0 ? res[0] : null); }, errorCallback);
        };
        RetrieveMultipleRecords.prototype.promiseFirst = function () {
            return promisifyCallback(this.getFirst.bind(this));
        };
        RetrieveMultipleRecords.prototype.getQueryString = function () {
            var prefix = this.entitySetName;
            if (this.id && this.relatedNav) {
                prefix += "(" + this.id + ")/" + this.relatedNav;
            }
            if (this.specialQuery)
                return prefix + this.specialQuery;
            var options = [];
            if (this.selects.length > 0)
                options.push("$select=" + this.selects.join(","));
            if (this.expands.length > 0) {
                options.push("$expand=" + this.expands.join(","));
            }
            if (this.filters) {
                options.push("$filter=" + this.filters);
            }
            if (this.ordering.length > 0) {
                options.push("$orderby=" + this.ordering.join(","));
            }
            if (this.skipAmount != null) {
                options.push("$skip=" + this.skipAmount);
            }
            if (this.topAmount != null) {
                options.push("$top=" + this.topAmount);
            }
            return prefix + (options.length > 0 ? "?" + options.join("&") : "");
        };
        RetrieveMultipleRecords.prototype.select = function (vars) {
            this.selects = parseSelects(vars);
            return this;
        };
        RetrieveMultipleRecords.prototype.selectMore = function (vars) {
            this.selects = this.selects.concat(parseSelects(vars));
            return this;
        };
        RetrieveMultipleRecords.prototype.expand = function (exps, selectVarFunc) {
            var expand = taggedExec(exps).toString();
            this.expandKeys.push(expand);
            var options = [];
            if (selectVarFunc)
                options.push("$select=" + parseSelects(selectVarFunc));
            this.expands.push(expand + (options.length > 0 ? "(" + options.join(";") + ")" : ""));
            return this;
        };
        RetrieveMultipleRecords.prototype.filter = function (filter) {
            this.filters = parseWithTransform(filter);
            return this;
        };
        RetrieveMultipleRecords.prototype.orFilter = function (filter) {
            if (this.filters)
                this.filters = Filter.or(this.filters, parseWithTransform(filter));
            else
                this.filter(filter);
            return this;
        };
        RetrieveMultipleRecords.prototype.andFilter = function (filter) {
            if (this.filters)
                this.filters = Filter.and(this.filters, parseWithTransform(filter));
            else
                this.filter(filter);
            return this;
        };
        /**
         * @internal
         */
        RetrieveMultipleRecords.prototype.order = function (varFunc, by) {
            this.ordering.push(parseWithTransform(varFunc) + " " + by);
            return this;
        };
        RetrieveMultipleRecords.prototype.orderAsc = function (vars) {
            return this.order(vars, "asc");
        };
        RetrieveMultipleRecords.prototype.orderDesc = function (vars) {
            return this.order(vars, "desc");
        };
        RetrieveMultipleRecords.prototype.skip = function (amount) {
            this.skipAmount = amount;
            return this;
        };
        RetrieveMultipleRecords.prototype.top = function (amount) {
            this.topAmount = amount;
            return this;
        };
        RetrieveMultipleRecords.prototype.maxPageSize = function (size) {
            this.additionalHeaders.push(MaxPageSizeHeader(size));
            return this;
        };
        /**
         * Sets a header that lets you retrieve formatted values as well. Should be used after using select and expand of attributes.
         */
        RetrieveMultipleRecords.prototype.includeFormattedValues = function () {
            this.additionalHeaders.push(FORMATTED_VALUES_HEADER);
            return this;
        };
        /**
         * Sets a header that lets you retrieve formatted values and lookup properties as well. Should be used after using select and expand of attributes.
         */
        RetrieveMultipleRecords.prototype.includeFormattedValuesAndLookupProperties = function () {
            this.additionalHeaders.push(INCLUDE_ANNOTATIONS_HEADER);
            return this;
        };
        /**
         * Sets up the query to filter the entity using the provided FetchXML
         * @param xml The query in FetchXML format
         */
        RetrieveMultipleRecords.prototype.useFetchXml = function (xml) {
            this.specialQuery = "?fetchXml=" + encodeURIComponent(xml);
            return this;
        };
        RetrieveMultipleRecords.prototype.usePredefinedQuery = function (type, guid) {
            this.specialQuery = "?" + type + "=" + guid;
            return this;
        };
        return RetrieveMultipleRecords;
    }(Query));
    XQW.RetrieveMultipleRecords = RetrieveMultipleRecords;
    var RetrieveRecord = /** @class */ (function (_super) {
        __extends(RetrieveRecord, _super);
        function RetrieveRecord(entitySetName, id, relatedNav) {
            var _this = _super.call(this, "GET") || this;
            _this.entitySetName = entitySetName;
            _this.id = id;
            _this.relatedNav = relatedNav;
            /**
             * @internal
             */
            _this.selects = [];
            /**
             * @internal
             */
            _this.expands = [];
            /**
             * @internal
             */
            _this.expandKeys = [];
            _this.id = stripGUID(id);
            return _this;
        }
        RetrieveRecord.Related = function (entityPicker, id, relatedPicker) {
            return new RetrieveRecord(taggedExec(entityPicker).toString(), id, taggedExec(relatedPicker).toString());
        };
        RetrieveRecord.Get = function (entityPicker, id) {
            return new RetrieveRecord(taggedExec(entityPicker).toString(), id);
        };
        RetrieveRecord.prototype.handleResponse = function (req, successCallback, errorCallback) {
            EntityLinkHelper.followLinks(parseRetrievedData(req), this.expandKeys, successCallback, errorCallback);
        };
        RetrieveRecord.prototype.select = function (varFunc) {
            this.selects = parseSelects(varFunc);
            return this;
        };
        RetrieveRecord.prototype.selectMore = function (varFunc) {
            this.selects = this.selects.concat(parseSelects(varFunc));
            return this;
        };
        RetrieveRecord.prototype.expand = function (exps, selectVarFunc, optArgs) {
            var expand = taggedExec(exps).toString();
            this.expandKeys.push(expand);
            var options = [];
            if (selectVarFunc)
                options.push("$select=" + parseSelects(selectVarFunc));
            if (optArgs) {
                if (optArgs.top)
                    options.push("$top=" + optArgs.top);
                if (optArgs.orderBy)
                    options.push("$orderby=" + parseWithTransform(optArgs.orderBy) + " " + (optArgs.sortOrder != 2 /* Descending */ ? "asc" : "desc"));
                if (optArgs.filter)
                    options.push("$filter=" + parseWithTransform(optArgs.filter));
            }
            this.expands.push(expand + (options.length > 0 ? "(" + options.join(";") + ")" : ""));
            return this;
        };
        RetrieveRecord.prototype.getQueryString = function () {
            var prefix = this.entitySetName + "(" + this.id + ")";
            var options = [];
            if (this.selects.length > 0)
                options.push("$select=" + this.selects.join(","));
            if (this.expands.length > 0)
                options.push("$expand=" + this.expands.join(","));
            if (this.relatedNav) {
                prefix += "/" + this.relatedNav;
            }
            return prefix + (options.length > 0 ? "?" + options.join("&") : "");
        };
        /**
         * Sets a header that lets you retrieve formatted values as well. Should be used after using select and expand of attributes.
         */
        RetrieveRecord.prototype.includeFormattedValues = function () {
            this.additionalHeaders.push(FORMATTED_VALUES_HEADER);
            return this;
        };
        /**
         * Sets a header that lets you retrieve formatted values and lookup properties as well. Should be used after using select and expand of attributes.
         */
        RetrieveRecord.prototype.includeFormattedValuesAndLookupProperties = function () {
            this.additionalHeaders.push(INCLUDE_ANNOTATIONS_HEADER);
            return this;
        };
        return RetrieveRecord;
    }(Query));
    XQW.RetrieveRecord = RetrieveRecord;
    /**
     * Contains information about a Create query
     */
    var CreateRecord = /** @class */ (function (_super) {
        __extends(CreateRecord, _super);
        function CreateRecord(entityPicker, record) {
            var _this = _super.call(this, "POST") || this;
            _this.record = record;
            _this.getObjectToSend = function () { return JSON.stringify(transformObject(_this.record)); };
            _this.entitySetName = taggedExec(entityPicker).toString();
            return _this;
        }
        CreateRecord.prototype.handleResponse = function (req, successCallback, errorCallback) {
            var header = req.getResponseHeader("OData-EntityId");
            if (header)
                successCallback(header.substr(-37, 36));
            else
                errorCallback(new Error("No valid OData-EntityId found in header."));
        };
        CreateRecord.prototype.setData = function (record) {
            this.record = record;
            return this;
        };
        CreateRecord.prototype.getQueryString = function () {
            return this.entitySetName;
        };
        return CreateRecord;
    }(Query));
    XQW.CreateRecord = CreateRecord;
    /**
     * Contains information about a Delete query
     */
    var DeleteRecord = /** @class */ (function (_super) {
        __extends(DeleteRecord, _super);
        function DeleteRecord(entityPicker, id) {
            var _this = _super.call(this, "DELETE") || this;
            _this.id = id;
            _this.id = id !== undefined ? stripGUID(id) : id;
            _this.entitySetName = taggedExec(entityPicker).toString();
            return _this;
        }
        DeleteRecord.prototype.handleResponse = function (req, successCallback) {
            successCallback();
        };
        DeleteRecord.prototype.setId = function (id) {
            this.id = stripGUID(id);
            return this;
        };
        DeleteRecord.prototype.getQueryString = function () {
            return this.entitySetName + "(" + this.id + ")";
        };
        return DeleteRecord;
    }(Query));
    XQW.DeleteRecord = DeleteRecord;
    /**
     * Contains information about an UpdateRecord query
     */
    var UpdateRecord = /** @class */ (function (_super) {
        __extends(UpdateRecord, _super);
        function UpdateRecord(entityPicker, id, record) {
            var _this = _super.call(this, "PATCH") || this;
            _this.id = id;
            _this.record = record;
            _this.getObjectToSend = function () { return JSON.stringify(transformObject(_this.record)); };
            _this.id = id !== undefined ? stripGUID(id) : id;
            _this.entitySetName = taggedExec(entityPicker).toString();
            return _this;
        }
        UpdateRecord.prototype.handleResponse = function (req, successCallback) {
            successCallback();
        };
        UpdateRecord.prototype.setData = function (id, record) {
            this.id = stripGUID(id);
            this.record = record;
            return this;
        };
        UpdateRecord.prototype.getQueryString = function () {
            return this.entitySetName + "(" + this.id + ")";
        };
        return UpdateRecord;
    }(Query));
    XQW.UpdateRecord = UpdateRecord;
    /**
     * Contains information about an AssociateRecord query for single-valued properties
     */
    var AssociateRecordSingle = /** @class */ (function (_super) {
        __extends(AssociateRecordSingle, _super);
        function AssociateRecordSingle(entityPicker, id, entityTargetPicker, targetid, relationPicker) {
            var _this = _super.call(this, "PUT") || this;
            _this.id = id;
            _this.getObjectToSend = function () { return JSON.stringify(transformObject(_this.record)); };
            _this.entitySetName = taggedExec(entityPicker).toString();
            _this.id = id !== undefined ? stripGUID(id) : id;
            _this.entitySetNameTarget = taggedExec(entityTargetPicker).toString();
            _this.targetId = targetid !== undefined ? stripGUID(targetid) : targetid;
            _this.relation = taggedExec(relationPicker).toString();
            _this.record = {};
            _this.record["_id$" + _this.entitySetNameTarget] = _this.targetId;
            return _this;
        }
        AssociateRecordSingle.prototype.handleResponse = function (req, successCallback) {
            successCallback();
        };
        AssociateRecordSingle.prototype.setData = function (id, record) {
            this.id = stripGUID(id);
            this.record = record;
            return this;
        };
        AssociateRecordSingle.prototype.getQueryString = function () {
            return this.entitySetName + "(" + this.id + ")/" + this.relation + "/$ref";
        };
        return AssociateRecordSingle;
    }(Query));
    XQW.AssociateRecordSingle = AssociateRecordSingle;
    /**
     * Contains information about an AssociateRecord query for collection-valued properties
     */
    var AssociateRecordCollection = /** @class */ (function (_super) {
        __extends(AssociateRecordCollection, _super);
        function AssociateRecordCollection(entityPicker, id, entityTargetPicker, targetid, relationPicker) {
            var _this = _super.call(this, "POST") || this;
            _this.id = id;
            _this.getObjectToSend = function () { return JSON.stringify(transformObject(_this.record)); };
            _this.entitySetName = taggedExec(entityPicker).toString();
            _this.id = id !== undefined ? stripGUID(id) : id;
            _this.entitySetNameTarget = taggedExec(entityTargetPicker).toString();
            _this.targetId = targetid !== undefined ? stripGUID(targetid) : targetid;
            _this.relation = taggedExec(relationPicker).toString();
            _this.record = {};
            _this.record["_id$" + _this.entitySetNameTarget] = _this.targetId;
            return _this;
        }
        AssociateRecordCollection.prototype.handleResponse = function (req, successCallback) {
            successCallback();
        };
        AssociateRecordCollection.prototype.setData = function (id, record) {
            this.id = stripGUID(id);
            this.record = record;
            return this;
        };
        AssociateRecordCollection.prototype.getQueryString = function () {
            return this.entitySetName + "(" + this.id + ")/" + this.relation + "/$ref";
        };
        return AssociateRecordCollection;
    }(Query));
    XQW.AssociateRecordCollection = AssociateRecordCollection;
    /**
     * Contains information about a Disassociate query
     */
    var DisassociateRecord = /** @class */ (function (_super) {
        __extends(DisassociateRecord, _super);
        function DisassociateRecord(entityName, id, rel, targetid) {
            var _this = _super.call(this, "DELETE") || this;
            _this.id = id;
            _this.targetid = targetid;
            _this.entitySetName = entityName;
            _this.id = id !== undefined ? stripGUID(id) : id;
            _this.relation = rel;
            _this.targetId = targetid !== undefined ? stripGUID(targetid) : targetid;
            return _this;
        }
        DisassociateRecord.Single = function (entityPicker, id, relationPicker) {
            return new DisassociateRecord(taggedExec(entityPicker).toString(), id, taggedExec(relationPicker).toString());
        };
        DisassociateRecord.Collection = function (entityPicker, id, relationPicker, targetId) {
            return new DisassociateRecord(taggedExec(entityPicker).toString(), id, taggedExec(relationPicker).toString(), targetId);
        };
        DisassociateRecord.prototype.handleResponse = function (req, successCallback) {
            successCallback();
        };
        DisassociateRecord.prototype.setId = function (id) {
            this.id = stripGUID(id);
            return this;
        };
        DisassociateRecord.prototype.getQueryString = function () {
            if (this.targetId == undefined) {
                // single-valued
                return this.entitySetName + "(" + this.id + ")/" + this.relation + "/$ref";
            }
            else {
                // collection-valued
                return this.entitySetName + "(" + this.id + ")/" + this.relation + "(" + this.targetId + ")/$ref";
            }
        };
        return DisassociateRecord;
    }(Query));
    XQW.DisassociateRecord = DisassociateRecord;
    /**
     * @internal
     */
    function startsWith(needle, haystack) {
        return haystack.lastIndexOf(needle, 0) === 0;
    }
    /**
     * @internal
     */
    function taggedExec(f, transformer) {
        return f(tagMatches(f, transformer));
    }
    /**
     * @internal
     */
    var fPatt = /function[^\(]*\(([a-zA-Z0-9_]+)[^\{]*\{([\s\S]*)\}$/m;
    /**
     * @internal
     */
    function objRegex(oName) {
        return new RegExp("\\b" + oName + "\\.([a-zA-Z_$][0-9a-zA-Z_$]*)(\\.([a-zA-Z_$][0-9a-zA-Z_$]*))?", "g");
    }
    /**
     * @internal
     */
    function analyzeFunc(f) {
        var m = f.toString().match(fPatt);
        if (!m)
            throw new Error("XrmQuery: Unable to properly parse function: " + f.toString());
        return { arg: m[1], body: m[2] };
    }
    /**
     * @internal
     */
    function tagMatches(f, transformer) {
        var funcInfo = analyzeFunc(f);
        var regex = objRegex(funcInfo.arg);
        var transformerFunc = transformer ? transformer : function (x) { return x; };
        var obj = {};
        var match;
        while ((match = regex.exec(funcInfo.body)) != null) {
            if (!obj[match[1]]) {
                obj[match[1]] = XQW.makeTag(transformerFunc(match[1]));
            }
            if (match[3]) {
                obj[match[1]][match[3]] = XQW.makeTag(match[1] + "/" + transformerFunc(match[3]));
            }
        }
        return obj;
    }
    /**
     * @internal
     */
    XQW.ApiUrl = null;
    var DefaultApiVersion = "8.0";
    function getDefaultUrl(v) {
        return getClientUrl() + ("/api/data/v" + v + "/");
    }
    XQW.getDefaultUrl = getDefaultUrl;
    function getApiUrl() {
        if (XQW.ApiUrl === null)
            XQW.ApiUrl = getDefaultUrl(DefaultApiVersion);
        return XQW.ApiUrl;
    }
    XQW.getApiUrl = getApiUrl;
    /**
     * @internal
     */
    function getClientUrl() {
        var url = getClientUrlFromGlobalContext();
        if (url !== undefined)
            return url;
        url = getClientUrlFromUtility();
        if (url !== undefined)
            return url;
        url = getClientUrlFromXrmPage();
        if (url !== undefined)
            return url;
        throw new Error("Context is not available.");
    }
    /**
     * @internal
     */
    function getClientUrlFromGlobalContext() {
        try {
            if (GetGlobalContext && GetGlobalContext().getClientUrl) {
                return GetGlobalContext().getClientUrl();
            }
        }
        catch (e) { }
        return undefined;
    }
    /**
     * @internal
     */
    function getClientUrlFromUtility() {
        try {
            if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext) {
                return Xrm.Utility.getGlobalContext().getClientUrl();
            }
        }
        catch (e) { }
        try {
            if (window && window.parent && window.parent.window) {
                var w = (window.parent.window);
                if (w && w.Xrm && w.Xrm.Utility && w.Xrm.Utility.getGlobalContext) {
                    return w.Xrm.Utility.getGlobalContext().getClientUrl();
                }
            }
        }
        catch (e) { }
        return undefined;
    }
    /**
     * @internal
     */
    function getClientUrlFromXrmPage() {
        try {
            if (Xrm && Xrm.Page && Xrm.Page.context) {
                return Xrm.Page.context.getClientUrl();
            }
        }
        catch (e) { }
        return undefined;
    }
    /**
     * Converts a XrmQuery select/filter name to the Web API format
     * @param name
     */
    function xrmQueryToCrm(name) {
        // check if the attribute name ends with '_guid'
        var endsWithUnderscoreGuid = name.match(/_guid$/);
        if (!endsWithUnderscoreGuid)
            return name;
        return "_" + name.substr(0, endsWithUnderscoreGuid.index) + "_value";
    }
    /**
     * Helper function to perform tagged execution and mapping to array of selects
     * @internal
     */
    function parseSelects(selectFunc) {
        return parseWithTransform(selectFunc).map(function (x) { return x.toString(); });
    }
    /**
     * Parses a given function and transforms any XrmQuery-specific values to it's corresponding CRM format
     * @param filterFunc
     */
    function parseWithTransform(filterFunc) {
        return taggedExec(filterFunc, xrmQueryToCrm);
    }
    /**
     * Transforms an object XrmQuery format to a CRM format
     * @param obj
     */
    function transformObject(obj) {
        if (obj instanceof Date) {
            return obj;
        }
        else if (typeof obj === "string" && startsWith("{", obj) && endsWith(obj, "}")) {
            return obj.substring(1, obj.length - 1);
        }
        else if (obj instanceof Array) {
            var arr = [];
            obj.forEach(function (v, idx) { return (arr[idx] = transformObject(v)); });
            return arr;
        }
        else if (obj instanceof Object) {
            var newObj = {};
            Object.keys(obj).forEach(function (key) { return parseAttribute(key, transformObject(obj[key]), newObj); });
            return newObj;
        }
        else {
            return obj;
        }
    }
    /**
     * Parses attributes from XrmQuery format to CRM format
     * @param key
     * @param value
     */
    function parseAttribute(key, val, newObj) {
        if (key.indexOf(BIND_ID) >= 0) {
            var lookupIdx = key.indexOf(BIND_ID);
            if (lookupIdx >= 0) {
                var setName = key.substr(lookupIdx + BIND_ID.length);
                newObj[key.substr(0, lookupIdx) + "@odata.bind"] = "/" + setName + "(" + val + ")";
            }
        }
        else if (key.indexOf(ID_ID) >= 0) {
            var lookupIdx = key.indexOf(ID_ID);
            if (lookupIdx >= 0) {
                var setName = key.substr(lookupIdx + ID_ID.length);
                var url = getDefaultUrl(DefaultApiVersion);
                newObj[key.substr(0, lookupIdx) + "@odata.id"] = "" + url + setName + "(" + val + ")";
            }
        }
        else {
            newObj[key] = val;
        }
    }
})(XQW || (XQW = {}));
var Filter;
(function (Filter) {
    var GUID_ENDING = "_value";
    var GUID_START = "_";
    function $in(val, listVal) {
        return queryFunc("In", val, listVal);
    }
    Filter.$in = $in;
    function notIn(val, listVal) {
        return queryFunc("NotIn", val, listVal);
    }
    Filter.notIn = notIn;
    function under(v1, v2) {
        return queryFunc("Under", v1, v2);
    }
    Filter.under = under;
    function underOrEqual(v1, v2) {
        return queryFunc("UnderOrEqual", v1, v2);
    }
    Filter.underOrEqual = underOrEqual;
    function notUnder(v1, v2) {
        return queryFunc("NotUnder", v1, v2);
    }
    Filter.notUnder = notUnder;
    function above(v1, v2) {
        return queryFunc("Above", v1, v2);
    }
    Filter.above = above;
    function equalUserId(prop) {
        return queryFunc("EqualUserId", prop);
    }
    Filter.equalUserId = equalUserId;
    function notEqualUserId(prop) {
        return queryFunc("NotEqualUserId", prop);
    }
    Filter.notEqualUserId = notEqualUserId;
    function equalBusinessId(prop) {
        return queryFunc("EqualBusinessId", prop);
    }
    Filter.equalBusinessId = equalBusinessId;
    function notEqualBusinessId(prop) {
        return queryFunc("NotEqualBusinessId", prop);
    }
    Filter.notEqualBusinessId = notEqualBusinessId;
    function queryFunc(funcName, val1, val2) {
        if (val2 !== undefined) {
            return ("Microsoft.Dynamics.CRM." + funcName + "(PropertyName='" + parsePropertyName(getVal(val1)) + "',PropertyValues=" + getVal(val2) + ")");
        }
        else {
            return ("Microsoft.Dynamics.CRM." + funcName + "(PropertyName='" + parsePropertyName(getVal(val1)) + "')");
        }
    }
    function parsePropertyName(name) {
        var idxStart = name.indexOf(GUID_START);
        var idxEnd = name.indexOf(GUID_ENDING);
        if (idxStart === -1 || idxEnd === -1)
            return name;
        return "" + name.substr(idxStart + 1, idxEnd - 1);
    }
    function getVal(v) {
        if (v === null)
            return "null";
        if (typeof v === "string")
            return "'" + encodeSpecialCharacters(v) + "'";
        if (v instanceof Date)
            return encodeSpecialCharacters(v.toISOString());
        if (v instanceof Array)
            return "[" + v.map(getVal).join(",") + "]";
        return encodeSpecialCharacters(v.toString());
    }
    /**
     * @internal
     */
    function encodeSpecialCharacters(queryString) {
        return encodeURI(queryString)
            .replace(/'/g, "''")
            .replace(/\+/g, "%2B")
            .replace(/\//g, "%2F")
            .replace(/\?/g, "%3F")
            .replace(/#/g, "%23")
            .replace(/&/g, "%26");
    }
})(Filter || (Filter = {}));
