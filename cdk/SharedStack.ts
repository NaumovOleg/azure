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
  resourceGroup: ResourceGroup;
  storageAccount: StorageAccount;
  plan: AppServicePlan;
  insights:ApplicationInsights;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.resourceGroup = new ResourceGroupConstruct(this, 'resource-gr').rg;
    this.storageAccount = new StorageAccountConstruct(this, 'storage-account', this.resourceGroup).storageAccount;
    this.plan = new AppServicePlanConstruct(this, 'plan', this.resourceGroup).plan;
    this.insights = new Insights(this, 'insights', this.resourceGroup).insights;
  }
}

export default SharedStack;
