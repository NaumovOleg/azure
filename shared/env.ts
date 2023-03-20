import { EnvType, load } from 'ts-dotenv';


export const schema = {
  MONGO_URL: String
};

export type Env = EnvType<typeof schema>;


export const env: Env = load(schema, '../.env');
