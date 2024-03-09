import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "RESTAURANT",
    })
    .then(() => {
      console.log("Connected to DB successfully");
    })
    .catch((err) => {
      console.log("Some Error Occured");
    });
};
