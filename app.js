import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { restRouter } from "./app/routes/index.js";
import CORS from "./config/cors.js";
import notFound from "./config/notFound.js";
import error from "./config/error.js";
import DB from "./config/config.js";

const app = express();
const PORT = 3000;

// console.log("process", process.env);
app.get("/", (req, res) => {
  res.send("Hello World.");
});

DB.connect();

app.use(express.json());
app.use(CORS.handleCors);
app.use("/api", restRouter);
app.use(notFound.notFound);
app.use(error.error);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
