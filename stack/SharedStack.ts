import { Construct } from 'constructs';
import ResourceGroupConstruct from './ResourceGroup';
import StorageAccountConstruct from './StorageAccount';
import AppServicePlanConstruct from './Plan';
import Insights from './Insights';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';
import { StorageAccount } from '../.gen/providers/azurerm/storage-account';
import { AppServicePlan } from '../.gen/providers/azurerm/app-service-plan';
import { ApplicationInsights } from '../.gen/providers/azurerm/application-insights';

class SharedStack extends Construct {
  rg: ResourceGroup;
  sta: StorageAccount;
  plan: AppServicePlan;
  ins:ApplicationInsights;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.rg = new ResourceGroupConstruct(this, 'resource-gr').rg;
    this.sta = new StorageAccountConstruct(this, 'storage-account', this.rg).sta;
    this.plan = new AppServicePlanConstruct(this, 'plan', this.rg).plan;
    this.ins = new Insights(this, 'insights', this.rg).ins;

  }
}

export default SharedStack;
