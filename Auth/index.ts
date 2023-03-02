import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (context: Context, _: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  const responseMessage = 'Profile';
  context.res = {
    body: responseMessage
  };

};

export default httpTrigger;
