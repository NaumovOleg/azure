import { Construct } from 'constructs';
import { AzurermProvider } from './.gen/providers/azurerm/provider';
import { App, TerraformStack, } from 'cdktf';

import SharedStack from './cdk/SharedStack';
import Function from './cdk/FunctionApp';

const subscriptionId = 'ff3fd8a8-04ee-41dd-8b5f-ac85fd217054';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new AzurermProvider(this, 'AzureRm', { subscriptionId,features: {} });
    const  shared = new SharedStack(this, 'shared-cdk');
    new Function(this, 'functions-cdk', shared);
  }
}

const app = new App();
new MyStack(app, 'main-cdk');
app.synth();
