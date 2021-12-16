# Function App Configuration Script
# Runs on Release Pipeline

# Parameters
Param (
	[Parameter(Mandatory=$True)]
    [string]$solutionId,
    [Parameter(Mandatory=$True)]
    [string]$environment,
	[Parameter(Mandatory=$True)]
    [string]$resourceGroupNamePubs,
    [Parameter(Mandatory=$True)]
    [string]$resourceGroupNameSubs,
    [Parameter(Mandatory=$True)]
    [string]$crmURL,
    [Parameter(Mandatory=$True)]
    [string]$serviceBusConnection,
    [Parameter(Mandatory=$True)]
    [string]$globalTraceLogInstrKey,
    [Parameter(Mandatory=$True)]
    [string]$endpointName
    )

# Deployment Variables
$solutionId = $solutionId.ToLower() -replace "\W"
$environment = $environment.ToLower() -replace "\W"
$functionAppNamePubs = "func-pubs-{0}-{1}" -f $solutionId, $environment
$functionAppNameSubs = "func-subs-{0}-{1}" -f $solutionId, $environment
$functionAppNameSubsProxy = "func-subs-proxy-{0}-{1}" -f $solutionId, $environment

# Import utility functions
. ".\deploy-utilities.ps1"

### PUBLISHERS RESOURCE GROUP SETTINGS ###
# Set script default resource group and location to the Publisher RG
Set-Default-Resource-Group -resourceGroupName $resourceGroupNamePubs

# Define Function App configuration settings - CRM Publishers
az functionapp config appsettings set `
--name $functionAppNamePubs `
--settings "FUNCTIONS_EXTENSION_VERSION=~3" `
"AzureWebJobsServiceBus=$serviceBusConnection" `
"GlobalTraceLogInstrKey=$globalTraceLogInstrKey" `
"EndpointName=$endpointName"

### SUBSCRIBERS RESOURCE GROUP SETTINGS ###
# Set script default resource group and location to the Subscriber RG
Set-Default-Resource-Group -resourceGroupName $resourceGroupNameSubs

# Define Function App configuration settings - CRM Subscribers
az functionapp config appsettings set `
--name $functionAppNameSubs `
--settings "FUNCTIONS_EXTENSION_VERSION=~1" `
"CRM-uri=$crmURL"

# Create function management url - Used for query the function app rest API
$subscriptionId = az account show --query id -o tsv
$managementURLPart = "subscriptions/$subscriptionId/resourceGroups/$resourceGroupNameSubs/providers/Microsoft.Web/sites"
$managementURL = "https://management.azure.com/$managementURLPart"

# Define CRM Subscriber Function Names
$simStemToCRM = "SimstemToCrm"
$dbcCustomerToCRM = "DbcCustomerToCrm"
$creditLineToCRM = "CreditLineToCrm"
$dbcCreditLineToCRM = "DbcCreditLineToCrm"
$dbcCreditLineClosedToCRM = "DbcCloseCreditLineToCrm"
$mdCustReqProcessed = "MDCustReqProcessed"
$mdCustReqPicked = "MDCustReqMDCustPicked"
$mdCustReqCanceled = "MDCustReqMDCustReqCanceled"
$itemCategoryDbcToCrmCreate = "ItemCategoryDbcToCrmCreate"
$itemCategoryDbcToCrmUpdate = "ItemCategoryDbcToCrmUpdate"
$itemCategoryDbcToCrmDelete = "ItemCategoryDbcToCrmDelete"
$itemDbcToCrmCreate = "ItemDbcToCrmCreate"
$itemDbcToCrmUpdate = "ItemDbcToCrmUpdate"
$itemSpecificationDbcToCrmCreate = "ItemSpecificationDbcToCrmCreate"
$itemSpecificationDbcToCrmUpdate = "ItemSpecificationDbcToCrmUpdate"
$itemSpecificationDbcToCrmDelete = "ItemSpecificationDbcToCrmDelete"
$unitOfMeasureDbcToCrmCreate = "UnitOfMeasureDbcToCrmCreate"
$unitOfMeasureDbcToCrmUpdate = "UnitOfMeasureDbcToCrmUpdate"
$unitOfMeasureDbcToCrmDelete = "UnitOfMeasureDbcToCrmDelete"
$itemUnitOfMeasureDbcToCrmCreate = "ItemUnitOfMeasureDbcToCrmCreate"
$itemUnitOfMeasureDbcToCrmDelete = "ItemUnitOfMeasureDbcToCrmDelete"
$draftSalesOrderCreated = "DraftSalesOrderCreated"
$salesOrderCancelled = "SalesOrderCancelled"
$salesOrderCreated = "SalesOrderCreated"
$salesOrderUpdated = "SalesOrderUpdated"
$nonTradeReasonCreated = "NonTradeReasonCreated"

# Get SimstemToCrm CRM Subsciber Function App Key and create the function url
$simStemToCRMKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$simStemToCRM/listKeys?api-version=2018-02-01" -o tsv
$simStemToCRMURL = "https://$functionAppNameSubs.azurewebsites.net/api/$simStemToCRM{0}$simStemToCRMKey" -f "?code="

# Get DbcCustomerToCrm CRM Subsciber Function App Key and create the function url
$dbcCustomerToCRMKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$dbcCustomerToCRM/listKeys?api-version=2018-02-01" -o tsv
$dbcCustomerToCRMURL = "https://$functionAppNameSubs.azurewebsites.net/api/$dbcCustomerToCRM{0}$dbcCustomerToCRMKey" -f "?code="

# Get CreditLineToCrm CRM Subsciber Function App Key and create the function url
$creditLineToCRMKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$creditLineToCRM/listKeys?api-version=2018-02-01" -o tsv
$creditLineToCRMURL = "https://$functionAppNameSubs.azurewebsites.net/api/$creditLineToCRM{0}$creditLineToCRMKey" -f "?code="

# Get DbcCreditLineToCrm CRM Subsciber Function App Key and create the function url
$dbcCreditLineToCRMKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$dbcCreditLineToCRM/listKeys?api-version=2018-02-01" -o tsv
$dbcCreditLineToCRMURL = "https://$functionAppNameSubs.azurewebsites.net/api/$dbcCreditLineToCRM{0}$dbcCreditLineToCRMKey" -f "?code="

# Get DbcCloseCreditLineToCrm CRM Subsciber Function App Key and create the function url
$DbcClosedCreditLineToCrmKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$dbcCreditLineClosedToCRM/listKeys?api-version=2018-02-01" -o tsv
$dbcCreditLineClosedToCRMURL = "https://$functionAppNameSubs.azurewebsites.net/api/$dbcCreditLineClosedToCRM{0}$DbcClosedCreditLineToCrmKey" -f "?code="

# Get MDCustReqProcessed CRM Subsciber Function App Key and create the function url
$mdCustReqProcessedKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$mdCustReqProcessed/listKeys?api-version=2018-02-01" -o tsv
$mdCustReqProcessedURL = "https://$functionAppNameSubs.azurewebsites.net/api/$mdCustReqProcessed{0}$mdCustReqProcessedKey" -f "?code="

# Get MDCustReqPicked CRM Subsciber Function App Key and create the function url
$mdCustReqPickedKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$mdCustReqPicked/listKeys?api-version=2018-02-01" -o tsv
$mdCustReqPickedURL = "https://$functionAppNameSubs.azurewebsites.net/api/$mdCustReqPicked{0}$mdCustReqPickedKey" -f "?code="

# Get MDCustReqCanceled CRM Subsciber Function App Key and create the function url
$mdCustReqCanceledKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$mdCustReqCanceled/listKeys?api-version=2018-02-01" -o tsv
$mdCustReqCanceledURL = "https://$functionAppNameSubs.azurewebsites.net/api/$mdCustReqCanceled{0}$mdCustReqCanceledKey" -f "?code="

# Get ItemCategoryDbcToCrmCreate CRM Subsciber Function App Key and create the function url
$itemCategoryDbcToCrmCreateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemCategoryDbcToCrmCreate/listKeys?api-version=2018-02-01" -o tsv
$itemCategoryDbcToCrmCreateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemCategoryDbcToCrmCreate{0}$itemCategoryDbcToCrmCreateKey" -f "?code="

# Get ItemCategoryDbcToCrmUpdate CRM Subsciber Function App Key and create the function url
$itemCategoryDbcToCrmUpdateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemCategoryDbcToCrmUpdate/listKeys?api-version=2018-02-01" -o tsv
$itemCategoryDbcToCrmUpdateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemCategoryDbcToCrmUpdate{0}$itemCategoryDbcToCrmUpdateKey" -f "?code="

# Get ItemCategoryDbcToCrmDelete CRM Subsciber Function App Key and create the function url
$itemCategoryDbcToCrmDeleteKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemCategoryDbcToCrmDelete/listKeys?api-version=2018-02-01" -o tsv
$itemCategoryDbcToCrmDeleteURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemCategoryDbcToCrmDelete{0}$itemCategoryDbcToCrmDeleteKey" -f "?code="

# Get ItemDbcToCrmCreate CRM Subsciber Function App Key and create the function url
$itemDbcToCrmCreateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemDbcToCrmCreate/listKeys?api-version=2018-02-01" -o tsv
$itemDbcToCrmCreateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemDbcToCrmCreate{0}$itemDbcToCrmCreateKey" -f "?code="

# Get ItemDbcToCrmUpdate CRM Subsciber Function App Key and create the function url
$itemDbcToCrmUpdateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemDbcToCrmUpdate/listKeys?api-version=2018-02-01" -o tsv
$itemDbcToCrmUpdateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemDbcToCrmUpdate{0}$itemDbcToCrmUpdateKey" -f "?code="

# Get ItemSpecificationDbcToCrmCreate CRM Subsciber Function App Key and create the function url
$itemSpecificationDbcToCrmCreateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemSpecificationDbcToCrmCreate/listKeys?api-version=2018-02-01" -o tsv
$itemSpecificationDbcToCrmCreateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemSpecificationDbcToCrmCreate{0}$itemSpecificationDbcToCrmCreateKey" -f "?code="

# Get ItemSpecificationDbcToCrmUpdate CRM Subsciber Function App Key and create the function url
$itemSpecificationDbcToCrmUpdateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemSpecificationDbcToCrmUpdate/listKeys?api-version=2018-02-01" -o tsv
$itemSpecificationDbcToCrmUpdateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemSpecificationDbcToCrmUpdate{0}$itemSpecificationDbcToCrmUpdateKey" -f "?code="

# Get ItemSpecificationDbcToCrmDelete CRM Subsciber Function App Key and create the function url
$itemSpecificationDbcToCrmDeleteKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$itemSpecificationDbcToCrmDelete/listKeys?api-version=2018-02-01" -o tsv
$itemSpecificationDbcToCrmDeleteURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemSpecificationDbcToCrmDelete{0}$itemSpecificationDbcToCrmDeleteKey" -f "?code="

# Get UnitOfMeasureDbcToCrmCreate CRM Subsciber Function App Key and create the function url
$unitOfMeasureDbcToCrmCreateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$unitOfMeasureDbcToCrmCreate/listKeys?api-version=2018-02-01" -o tsv
$unitOfMeasureDbcToCrmCreateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$unitOfMeasureDbcToCrmCreate{0}$unitOfMeasureDbcToCrmCreateKey" -f "?code="

# Get UnitOfMeasureDbcToCrmUpdate CRM Subsciber Function App Key and create the function url
$unitOfMeasureDbcToCrmUpdateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$unitOfMeasureDbcToCrmUpdate/listKeys?api-version=2018-02-01" -o tsv
$unitOfMeasureDbcToCrmUpdateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$unitOfMeasureDbcToCrmUpdate{0}$unitOfMeasureDbcToCrmUpdateKey" -f "?code="

# Get UnitOfMeasureDbcToCrmDelete CRM Subsciber Function App Key and create the function url
$unitOfMeasureDbcToCrmDeleteKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$unitOfMeasureDbcToCrmDelete/listKeys?api-version=2018-02-01" -o tsv
$unitOfMeasureDbcToCrmDeleteURL = "https://$functionAppNameSubs.azurewebsites.net/api/$unitOfMeasureDbcToCrmDelete{0}$unitOfMeasureDbcToCrmDeleteKey" -f "?code="

# Get ItemUnitOfMeasureDbcToCrmCreate CRM Subsciber Function App Key and create the function url
$itemUnitOfMeasureDbcToCrmCreateKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$ItemUnitOfMeasureDbcToCrmCreate/listKeys?api-version=2018-02-01" -o tsv
$itemUnitOfMeasureDbcToCrmCreateURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemUnitOfMeasureDbcToCrmCreate{0}$itemUnitOfMeasureDbcToCrmCreateKey" -f "?code="

# Get ItemUnitOfMeasureDbcToCrmDelete CRM Subsciber Function App Key and create the function url
$itemUnitOfMeasureDbcToCrmDeleteKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$ItemUnitOfMeasureDbcToCrmDelete/listKeys?api-version=2018-02-01" -o tsv
$itemUnitOfMeasureDbcToCrmDeleteURL = "https://$functionAppNameSubs.azurewebsites.net/api/$itemUnitOfMeasureDbcToCrmDelete{0}$itemUnitOfMeasureDbcToCrmDeleteKey" -f "?code="


# Get DraftSalesOrderCreated CRM Subsciber Function App Key and create the function url
$draftSalesOrderCreatedKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$draftSalesOrderCreated/listKeys?api-version=2018-02-01" -o tsv
$draftSalesOrderCreatedURL = "https://$functionAppNameSubs.azurewebsites.net/api/$draftSalesOrderCreated{0}$draftSalesOrderCreatedKey" -f "?code="

# Get CSalesOrderCreated CRM Subsciber Function App Key and create the function url
$salesOrderCancelledKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$salesOrderCancelled/listKeys?api-version=2018-02-01" -o tsv
$salesOrderCancelledURL = "https://$functionAppNameSubs.azurewebsites.net/api/$salesOrderCancelled{0}$salesOrderCancelledKey" -f "?code="

# Get SalesOrderCreated CRM Subsciber Function App Key and create the function url
$salesOrderCreatedKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$salesOrderCreated/listKeys?api-version=2018-02-01" -o tsv
$salesOrderCreatedURL = "https://$functionAppNameSubs.azurewebsites.net/api/$salesOrderCreated{0}$salesOrderCreatedKey" -f "?code="

# Get SalesOrderUdpated CRM Subsciber Function App Key and create the function url
$salesOrderUpdatedKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$salesOrderUpdated/listKeys?api-version=2018-02-01" -o tsv
$salesOrderUpdatedURL = "https://$functionAppNameSubs.azurewebsites.net/api/$salesOrderUpdated{0}$salesOrderUpdatedKey" -f "?code="

# Get NonTradeReasonCreated CRM Subsciber Function App Key and create the function url
$nonTradeReasonCreatedKey = az rest --method post `
--uri "$managementURL/$functionAppNameSubs/functions/$nonTradeReasonCreated/listKeys?api-version=2018-02-01" -o tsv
$nonTradeReasonCreatedURL = "https://$functionAppNameSubs.azurewebsites.net/api/$nonTradeReasonCreated{0}$nonTradeReasonCreatedKey" -f "?code="

# Define Function App configuration settings - CRM Subscriber Proxy
az functionapp config appsettings set `
--name $functionAppNameSubsProxy `
--settings "FUNCTIONS_EXTENSION_VERSION=~3" `
"AzureWebJobsServiceBus=$serviceBusConnection" `
"GlobalTraceLogInstrKey=$globalTraceLogInstrKey" `
"SimStemToCRM-URL=$simStemToCRMURL" `
"DBCCustomerToCrm-URL=$dbcCustomerToCRMURL" `
"CreditLineToCrm-URL=$creditLineToCRMURL" `
"DbcCreditLineToCrm-URL=$dbcCreditLineToCRMURL" `
"DbcCloseCreditLineToCrm-URL=$dbcCreditLineClosedToCRMURL" `
"MDCustReqProcessed-URL=$mdCustReqProcessedURL" `
"MDCustReqPicked-URL=$mdCustReqPickedURL" `
"MDCustReqCanceled-URL=$mdCustReqCanceledURL" `
"ItemCategoryDbcToCrmCreate-URL=$itemCategoryDbcToCrmCreateURL" `
"ItemCategoryDbcToCrmUpdate-URL=$itemCategoryDbcToCrmUpdateURL" `
"ItemCategoryDbcToCrmDelete-URL=$itemCategoryDbcToCrmDeleteURL" `
"ItemDbcToCrmCreate-URL=$itemDbcToCrmCreateURL" `
"ItemDbcToCrmUpdate-URL=$itemDbcToCrmUpdateURL" `
"ItemSpecificationDbcToCrmCreate-URL=$itemSpecificationDbcToCrmCreateURL" `
"ItemSpecificationDbcToCrmUpdate-URL=$itemSpecificationDbcToCrmUpdateURL" `
"ItemSpecificationDbcToCrmDelete-URL=$itemSpecificationDbcToCrmDeleteURL" `
"UnitOfMeasureDbcToCrmCreate-URL=$unitOfMeasureDbcToCrmCreateURL" `
"UnitOfMeasureDbcToCrmUpdate-URL=$unitOfMeasureDbcToCrmUpdateURL" `
"UnitOfMeasureDbcToCrmDelete-URL=$unitOfMeasureDbcToCrmDeleteURL" `
"ItemUnitOfMeasureDbcToCrmCreate-URL=$itemUnitOfMeasureDbcToCrmCreateURL" `
"ItemUnitOfMeasureDbcToCrmDelete-URL=$itemUnitOfMeasureDbcToCrmDeleteURL" `
"DraftSalesOrderCreated-URL=$draftSalesOrderCreatedURL" `
"SalesOrderCancelled-URL=$salesOrderCancelledURL" `
"SalesOrderCreated-URL=$salesOrderCreatedURL" `
"SalesOrderUpdated-URL=$salesOrderUpdatedURL" `
"NonTradeReasonCreated-URL=$nonTradeReasonCreatedURL" `
"EndpointName=$endpointName"