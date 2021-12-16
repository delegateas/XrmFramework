# Azure Provisioning Script
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
    [string]$resourceGroupNameSubs
    )

# Deployment Variables
$solutionId = $solutionId.ToLower() -replace "\W"
$environment = $environment.ToLower() -replace "\W"
$appInsightsNamePubs = "appinsights-pubs-{0}-{1}" -f $solutionId, $environment
$appInsightsNameSubs = "appinsights-subs-{0}-{1}" -f $solutionId, $environment
$keyvaultNamePubs = "kv-pubs-{0}-{1}" -f $solutionId, $environment
$keyvaultNameSubs = "kv-subs-{0}-{1}" -f $solutionId, $environment
$storageAccountNamePubs = "stpubs{0}{1}" -f $solutionId, $environment
$storageAccountNameSubs = "stsubs{0}{1}" -f $solutionId, $environment
$appServicePlanNamePubs = "asp-pubs-{0}-{1}" -f $solutionId, $environment
$appServicePlanNameSubs = "asp-subs-{0}-{1}" -f $solutionId, $environment
$functionAppNamePubs = "func-pubs-{0}-{1}" -f $solutionId, $environment
$functionAppNameSubs = "func-subs-{0}-{1}" -f $solutionId, $environment
$functionAppNameSubsProxy = "func-subs-proxy-{0}-{1}" -f $solutionId, $environment

# Import utility functions
. ".\deploy-utilities.ps1"

# Install Azure CLI extensions
Add-Extension -name application-insights

### PUBLISHERS RESOURCE GROUP SETTINGS ###
# Set script default resource group and location to the Publisher RG
Set-Default-Resource-Group -resourceGroupName $resourceGroupNamePubs

# Create Key Vault
az keyvault create `
--name $keyvaultNamePubs

# Create Application Insights
az monitor app-insights component create `
    --app $appInsightsNamePubs

# Create Azure Storage account
az storage account create `
--name $storageAccountNamePubs `
--sku 'Standard_LRS' `
--kind 'StorageV2' `
--https-only 'true'

# Create App Service Plan for Publishers
az appservice plan create `
  --name $appServicePlanNamePubs `
  --sku B1

# Function App 1 #
# Create Function App - CRM Publishers
az functionapp create `
--plan $appServicePlanNamePubs `
--name $functionAppNamePubs `
--app-insights $appInsightsNamePubs `
--storage $storageAccountNamePubs `
--functions-version 3

# Set Managed Identity
az webapp identity assign --name $functionAppNamePubs

### SUBSCRIBERS RESOURCE GROUP SETTINGS ###
# Set script default resource group and location to the Subscriber RG
Set-Default-Resource-Group -resourceGroupName $resourceGroupNameSubs

# Create Key Vault
az keyvault create `
--name $keyvaultNameSubs

# Create Application Insights
az monitor app-insights component create `
    --app $appInsightsNameSubs

# Create Azure Storage account
az storage account create `
--name $storageAccountNameSubs `
--sku 'Standard_LRS' `
--kind 'StorageV2' `
--https-only 'true'

# Create App Service Plan
az appservice plan create `
  --name $appServicePlanNameSubs `
  --sku B1

# Function App 1 #
# Create Function App - CRM Subscribers
az functionapp create `
--plan $appServicePlanNameSubs `
--name $functionAppNameSubs `
--app-insights $appInsightsNameSubs `
--storage $storageAccountNameSubs `
--functions-version 3

# Set Managed Identity
az webapp identity assign --name $functionAppNameSubs

# Function App 2 #
# Create Function App - CRM Subscribers Proxy
az functionapp create `
--plan $appServicePlanNameSubs `
--name $functionAppNameSubsProxy `
--app-insights $appInsightsNameSubs `
--storage $storageAccountNameSubs `
--functions-version 3

# Set Managed Identity
az webapp identity assign --name $functionAppNameSubsProxy