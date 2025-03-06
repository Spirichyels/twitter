import express from "express";
import { twitRouter } from "./scr/twit/twit.controller.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

async function main(params) {
  app.use(express.json());

  app.use("/api/twits", twitRouter);

  console.log("dfg", process.env.PORT);

  app.get("/error", (req, res) => {
    throw new Error("This a test error");
  });

  app.all("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
  });

  app.use((err, rq, res, next) => {
    console.error(err.stack);
    res.status(500).send("Что-то пошло не так!");
  });

  app.listen(process.env.PORT || 4200, () => {
    console.log("Server is running on port 4200");
  });
}

main();
