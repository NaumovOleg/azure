import { Construct } from 'constructs';
import { ApplicationInsights } from '../.gen/providers/azurerm/application-insights';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';

class AppServicePlanConstruct extends Construct {
  ins: ApplicationInsights;
  constructor(scope: Construct, id: string, rg:ResourceGroup) {
    super(scope, id);
    this.ins = new ApplicationInsights(this, 'app-insights', {
      resourceGroupName: rg.name,
      location: rg.location,
      name: 'insights',
      applicationType: 'Node.JS'
    });
  }
}

export default AppServicePlanConstruct;
