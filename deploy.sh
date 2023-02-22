#!/bin/bash

ACR_NAME="olehqwefdvxvgaf"
RESOURCE_GROUP="keeperoleg26_rg"
API_NAME="myapiname"
CONTAINER_REGISTRY="ca65d2078c2bacr"
ENVIRONMENT="test-env"
LOCATION="westeurope"
SUBSCRIPTION_ID="ff3fd8a8-04ee-41dd-8b5f-ac85fd217054"

#API_BASE_URL=$(az containerapp show --resource-group $RESOURCE_GROUP --name $API_NAME --query properties.configuration.ingress.fqdn -o tsv)
az group create \
  --name $RESOURCE_GROUP \
  --location "$LOCATION"

az acr create \
  --resource-group $RESOURCE_GROUP \
  --name $ACR_NAME \
  --sku Basic \
  --admin-enabled true

az acr build --registry $ACR_NAME --image $API_NAME .

az containerapp env create \
  --name $ENVIRONMENT \
  --resource-group $RESOURCE_GROUP \
  --location "$LOCATION"

az containerapp create \
  --name $API_NAME \
  --resource-group $RESOURCE_GROUP \
  --environment $ENVIRONMENT \
  --image $ACR_NAME.azurecr.io/$API_NAME \
  --target-port 3000 \
  --ingress 'external' \
  --registry-server $ACR_NAME.azurecr.io \
  --query properties.configuration.ingress.fqdn

