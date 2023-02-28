import { Construct } from 'constructs';
import { FunctionApp, } from '../.gen/providers/azurerm/function-app';

import SharedStack from './SharedStack';

class Function extends Construct {
  constructor(scope: Construct, id: string, shared: SharedStack) {
    super(scope, id);

    new FunctionApp(this, 'cdk-functions-app',{
      resourceGroupName: shared.resourceGroup.name,
      appServicePlanId: shared.plan.id,
      name: 'kith-function-app',
      location: shared.resourceGroup.location,
      version: '~4',
      storageAccountName: shared.storageAccount.name,
      storageAccountAccessKey: shared.storageAccount.primaryAccessKey,
      siteConfig: {
        linuxFxVersion: 'node|18'
      },


      appSettings: {
        FUNCTIONS_WORKER_RUNTIME: 'node',
        // FUNCTIONS_WORKER_RUNTIME_VERSION: '~18',

        WEBSITE_RUN_FROM_PACKAGE: '1',
        WEBSITE_NODE_DEFAULT_VERSION: '~18',
        WEBSITE_CONTENTAZUREFILECONNECTIONSTRING: shared.storageAccount.primaryConnectionString,
        WEBSITE_CONTENTSHARE: 'kith-function-app-ficecmea2',
        APPINSIGHTS_INSTRUMENTATIONKEY: shared.insights.instrumentationKey,
      }
    });

  }
}

export default Function;
