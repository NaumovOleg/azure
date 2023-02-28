import { Construct } from 'constructs';
import { AzurermProvider } from './.gen/providers/azurerm/provider';
import { App, TerraformStack, } from 'cdktf';

import SharedStack from './stack/SharedStack';
import Functions from './stack/Functions';

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new AzurermProvider(this, 'AzureRm', {
      subscriptionId: 'ff3fd8a8-04ee-41dd-8b5f-ac85fd217054',
      
      features: {}, });
    const  shared = new SharedStack(this, 'shared-stack');
    new Functions(this, 'functions-stack', shared);
  }
}

const app = new App();
new MyStack(app, 'main-stack');
app.synth();
