import "dotenv/config";
import express from "express";
import { connectDb } from "./db/config.js";
import dbInit from "./db/init.js";
import TaskRouter from "./router/task.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/", TaskRouter);
const PORT = process.env.PORT;

connectDb();
dbInit()
  .then(console.log("DB Synced"))
  .catch((error) => {
    console.log("DB synced went wrong", error);
  });
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`http://localhost:${PORT}`);
  } else {
    console.log("Something went wrong with the server");
  }
});
