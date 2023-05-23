import mongoose from "mongoose";

mongoose.Promise = global.Promise;

// const username = process.env.USERNAME;
// const password = process.env.PASSWORD;
// const cluster = process.env.CLUSTER;
// const dbname = process.env.DBNAME;

// const username = "rupali";
// const password = "Banisharma123";
// const cluster = "cluster0.6jcyeta";
// const dbname = "product";
// console.log("username", process.env);

export default {
  connect() {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const cluster = process.env.CLUSTER;
    const dbname = process.env.DBNAME;

    mongoose.connect(
      `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`
    );
  },
};
