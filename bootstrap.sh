#!/bin/bash

ACR_NAME="testacrnamefrfdwedwe"
RESOURCE_GROUP="oleg-rg"
APP_NAME="api"
ENVIRONMENT="new-environment"
LOCATION="westeurope"
SUBSCRIPTION_ID="ff3fd8a8-04ee-41dd-8b5f-ac85fd217054"

#API_BASE_URL=$(az containerapp show --resource-group $RESOURCE_GROUP --name $API_NAME --query properties.configuration.ingress.fqdn -o tsv)
#az group create \
#  --name $RESOURCE_GROUP \
#  --location "$LOCATION"
#
#az acr create \
#  --resource-group $RESOURCE_GROUP \
#  --name $ACR_NAME \
#  --sku Basic \
#  --admin-enabled true
#
#az acr build --registry $ACR_NAME --image $APP_NAME .
#
#az containerapp env create \
#  --name $ENVIRONMENT \
#  --resource-group $RESOURCE_GROUP \
#  --location "$LOCATION"
#
#az containerapp create \
#  --name $APP_NAME \
#  --resource-group $RESOURCE_GROUP \
#  --environment $ENVIRONMENT \
#  --image $ACR_NAME.azurecr.io/$APP_NAME \
#  --target-port 3000 \
#  --ingress 'external' \
#  --registry-server $ACR_NAME.azurecr.io \
#  --query properties.configuration.ingress.fqdn

#az containerapp identity assign \
#  --name $APP_NAME \
#  --resource-group $RESOURCE_GROUP \
#  --system-assigned \
#  --output json

#{
#  "principalId": "725db5ad-d9bb-4b2b-97d8-7c6f40b8f497",
#  "tenantId": "e3cc5eef-b2b3-46b7-873e-67da94646a75",
#  "type": "SystemAssigned"
#}

#az acr show --name testacrnamefrfdwedwe --query id

#az containerapp registry set \
#  --name $APP_NAME \
#  --resource-group $RESOURCE_GROUP \
#  --server $ACR_NAME.azurecr.io \
#  --identity system

#az role assignment create \
#  --assignee "725db5ad-d9bb-4b2b-97d8-7c6f40b8f497" \
#  --role AcrPull \
#  --scope "/subscriptions/ff3fd8a8-04ee-41dd-8b5f-ac85fd217054/resourceGroups/oleg-rg/providers/Microsoft.ContainerRegistry/registries/testacrnamefrfdwedwe"

az ad sp create-for-rbac \
  --name my_app_creadentials \
  --role contributor \
  --scopes /subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP \
  --sdk-auth \
  --output json
