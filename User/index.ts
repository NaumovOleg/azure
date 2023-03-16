import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { config } from  'dotenv';
import connection  from '../shared/dal/connection';
import { User } from '../shared/dal/models';

config();

const httpTrigger: AzureFunction = async function (context: Context, _: HttpRequest): Promise<void> {
    
  console.log('ddddddddddddddddddddddddddddddddddaaaaaaddddd',process.env); 
  await connection.open();


  const user  = new User({ name: 'tes' });

  await user.save();

  await connection.close();

  context.res = {
    body: user
  };

};

export default httpTrigger;
