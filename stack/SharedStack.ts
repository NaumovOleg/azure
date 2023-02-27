
import { Construct } from 'constructs';
import ResourceGroupConstruct from './ResourceGroup';
import StorageAccountConstruct from './StorageAccount';
import AppServicePlanConstruct from './Plan';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';
import { StorageAccount } from '../.gen/providers/azurerm/storage-account';
import { AppServicePlan } from '../.gen/providers/azurerm/app-service-plan';

class SharedStack extends Construct {
  rg: ResourceGroup;
  sta: StorageAccount;
  plan: AppServicePlan;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.rg = new ResourceGroupConstruct(this, 'resource-gr').rg;
    this.sta = new StorageAccountConstruct(this, 'storage-account', this.rg).sta;
    this.plan = new AppServicePlanConstruct(this, 'plan', this.rg).plan;

  }
}

export default SharedStack;
