
import 'module-alias/register'; 

import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import { User } from '@models';
import connection  from '@/shared/database/connection';
import  { env } from  '@env';


const httpTrigger: AzureFunction = async function (context: Context, _: HttpRequest): Promise<void> {
  console.log(process.env.MONGO_URL, env.MONGO_URL);

  await connection.open();


  const user  = new User({ name: 'tes' });

  await user.save();

  await connection.close();

  context.res = {
    body: 'user'
  };

};

export default httpTrigger;
