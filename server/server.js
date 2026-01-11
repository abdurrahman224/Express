import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './confing/mongodb.js';
const app = express();
const prot = process.env.POT || 4000;
 connectDB(),
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get('/', (req, res) => {
  
  res.send(" from my express server" )
})

app.listen(prot, () => {
  console.log(`my express prot number${prot}`);
});
