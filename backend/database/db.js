// build connection between mongodb-database and mongoose
import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect("mongodb+srv://Ahsan:12121@cluster0.cx6rwrx.mongodb.net/", {
      dbName: "pinterest",
    });
    console.log(" ----data base connected successfully----");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
