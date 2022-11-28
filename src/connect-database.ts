import mongoose from 'mongoose';

export default function ConnectDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/')
    .then(() => {
      console.log('db connected');
    })
    .catch(console.log);
}
