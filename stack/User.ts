import { Construct } from 'constructs';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';
import { FunctionApp, } from '../.gen/providers/azurerm/function-app';
import { AppServicePlan } from '../.gen/providers/azurerm/app-service-plan';
import { StorageAccount } from '../.gen/providers/azurerm/storage-account';

class UserStack extends Construct {
  constructor(scope: Construct, id: string,  rg: ResourceGroup, plan:AppServicePlan, storage:StorageAccount) {
    super(scope, id);

    new FunctionApp(this, 'cdk-functions-app',{
      resourceGroupName: rg.name,
      httpsOnly: true,
      appServicePlanId: plan.id,
      name: `${id}-User-function`,
      location: 'northeurope',
      storageAccountName: storage.name,
      storageAccountAccessKey: storage.primaryAccessKey,


      appSettings: {
        FUNCTIONS_WORKER_RUNTIME: 'node'
      }
    });

  }
}

export default UserStack;
