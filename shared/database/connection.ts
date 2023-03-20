

import  mongoose  from 'mongoose';
import { env } from '../env';
export default  {
  open: async ()=>{
    return mongoose.connect(env.MONGO_URL);
  },
  close: async ()=>{
    return mongoose.connection.close();
  },
};