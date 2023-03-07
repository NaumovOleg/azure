import { Construct } from 'constructs';
import { StorageAccount } from '../.gen/providers/azurerm/storage-account';
import { ResourceGroup } from '../.gen/providers/azurerm/resource-group';

class StorageAccountConstruct extends Construct {
  storageAccount: StorageAccount;
  constructor(scope: Construct, id: string, rg: ResourceGroup) {
    super(scope, id);
    this.storageAccount = new StorageAccount(this, 'storage-account-dmcbejkcce', {
      name: 'sxdcfgvhjklmkjhv',
      location: rg.location,
      accountReplicationType: 'LRS',
      accountTier: 'Standard',
      resourceGroupName: rg.name,
      staticWebsite: { indexDocument: 'index.html' }
    });
  }
}

export default StorageAccountConstruct;
