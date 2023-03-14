import { Construct } from 'constructs';
import { AzurermProvider } from './.gen/providers/azurerm/provider';
import { App, TerraformStack, } from 'cdktf';

import SharedStack from './cdk/SharedStack';
import Function from './cdk/FunctionApp';
import Mongo from './cdk/Mongo';


const subscriptionId = 'ff3fd8a8-04ee-41dd-8b5f-ac85fd217054';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new AzurermProvider(this, 'AzureRm', { subscriptionId,features: {} });
    const  shared = new SharedStack(this, 'shared-cdk');
    new Function(this, 'functions-cdk', shared);
    new Mongo(this, 'mongo-cdk', shared);
  }
}

const app = new App();
new MyStack(app, 'main-cdk');
app.synth();

// {
//   "clientId": "cd1f1cbf-934c-4a0f-b6c5-b316973b4b38",
//     "clientSecret": "UfK8Q~~IyxsVfe1qixkdvlK-sbwUdEArWuMC~aea",
//     "subscriptionId": "ff3fd8a8-04ee-41dd-8b5f-ac85fd217054",
//     "tenantId": "e3cc5eef-b2b3-46b7-873e-67da94646a75",
//     "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",
//     "resourceManagerEndpointUrl": "https://management.azure.com/",
//     "activeDirectoryGraphResourceId": "https://graph.windows.net/",
//     "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",
//     "galleryEndpointUrl": "https://gallery.azure.com/",
//     "managementEndpointUrl": "https://management.core.windows.net/"
// }
