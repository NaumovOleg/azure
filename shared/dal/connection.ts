
import  mongoose  from 'mongoose';
export default  {
  open: async ()=>{
    return mongoose.connect(process.env.MONGO_URL!);
  },
  close: async ()=>{
    return mongoose.connection.close();
  },
};