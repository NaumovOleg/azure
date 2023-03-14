import { Construct } from 'constructs';
import { CosmosdbMongoDatabase, } from '../.gen/providers/azurerm/cosmosdb-mongo-database';

import SharedStack from './SharedStack';

class Database extends Construct {
  constructor(scope: Construct, id: string, shared: SharedStack) {
    super(scope, id);

    //
    // const  account  = new CosmosdbAccount(this, 'cosmos-account', {
    //   resourceGroupName: shared.resourceGroup.name,
    //   name: `cosmos-account-${shared.resourceGroup.name}`,
    //   location: shared.resourceGroup.location,
    //   offerType: 'Standard',
    //   kind: 'MongoDB',
    //   consistencyPolicy: {
    //     consistencyLevel: 'Session',
    //   },
    //   geoLocation: [
    //     {
    //       location: shared.resourceGroup.location,
    //       failoverPriority: 0,
    //     }
    //   ]
    // });


    new CosmosdbMongoDatabase(this, 'cosmos-database', {
      resourceGroupName: shared.resourceGroup.name,
      name: 'cosmos-database',
      accountName: 'cosmos-account-rg-kith'
    });


  }
}

export default Database;
