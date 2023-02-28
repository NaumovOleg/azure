import { Construct } from 'constructs';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';
import { FunctionApp, } from '../.gen/providers/azurerm/function-app';
import { AppServicePlan } from '../.gen/providers/azurerm/app-service-plan';
import { StorageAccount } from '../.gen/providers/azurerm/storage-account';
import { ApplicationInsights } from '../.gen/providers/azurerm/application-insights';

class UserStack extends Construct {
  constructor(scope: Construct, id: string,  rg: ResourceGroup, plan:AppServicePlan, storage:StorageAccount, ins:ApplicationInsights) {
    super(scope, id);

    new FunctionApp(this, 'cdk-functions-app',{


      resourceGroupName: rg.name,
      appServicePlanId: plan.id,
      name: 'kith-function-app',
      location: rg.location,
      version: '~4',
      storageAccountName: storage.name,
      storageAccountAccessKey: storage.primaryAccessKey,
      siteConfig: {
        linuxFxVersion: 'node|18'
      },


      appSettings: {
        FUNCTIONS_WORKER_RUNTIME: 'node',
        // FUNCTIONS_WORKER_RUNTIME_VERSION: '~18',

        WEBSITE_RUN_FROM_PACKAGE: '1',
        WEBSITE_NODE_DEFAULT_VERSION: '~18',
        WEBSITE_CONTENTAZUREFILECONNECTIONSTRING: storage.primaryConnectionString,
        WEBSITE_CONTENTSHARE: 'kith-function-app-ficecmea2',
        APPINSIGHTS_INSTRUMENTATIONKEY: ins.instrumentationKey,
      }
    });

  }
}

export default UserStack;
