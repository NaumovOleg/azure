import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import mongoose from 'mongoose';
import { User } from './model';

const  str = 'mongodb://cosmos-account-rg-kith:06BwdwK1wuAgu9VZiWj4GcNh3sL266zoDFd9hQEij099jI5rpSFuckjoly4Y33TB2w7RbXYXztOXACDb3YCN0A==@cosmos-account-rg-kith.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmos-account-rg-kith@';

const httpTrigger: AzureFunction = async function (context: Context, _: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');

  await mongoose.connect(str,);

  const user  = new User({ name: 'tes' });

  await user.save();


  context.res = {
    body: user
  };

};

export default httpTrigger;
