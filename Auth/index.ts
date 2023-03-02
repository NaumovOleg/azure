import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  const buffer = Buffer.from(req.headers['x-ms-client-principal'], 'base64');
  const user = JSON.parse(buffer.toString('ascii'));

  const email = user.claims.find((c:any) => c.typ === 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress').val;
  const nickname = user.claims.find((c:any)=> c.typ === 'nickname').val;

  context.res = {
    status: 200,
    body: `Hello ${nickname} [${email}]`
  };

};

export default httpTrigger;

// az rest --method put --url https://management.azure.com/subscriptions/ff3fd8a8-04ee-41dd-8b5f-ac85fd217054/resourceGroups/rg-kith/providers/Microsoft.Web/sites/kith-function-app/config/authsettings?api-version=2018-02-01 --body "{\"properties\":{\"enabled\":\"true\",\"isAuthFromFile\":\"true\",\"authFilePath\":\"auth.json\"}}"
