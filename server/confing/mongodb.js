import mongoose from "mongoose";
const connectDB = async()=> {
  mongoose.connection.on("connected", () => {
  console.log("Databese connected");
})
await mongoose.connect(`${process.env.MONGODB_URI}/express_mongodb `);
}
export default connectDB