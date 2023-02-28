import { Construct } from 'constructs';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';

class ResourceGroupConstruct extends Construct {
  rg: ResourceGroup;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.rg = new ResourceGroup(this, 'rg-example', {
      name: 'rg-kith',
      location: 'northeurope'
    });
  }
}

export default ResourceGroupConstruct;
