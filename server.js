import express from "express";
import { twitRouter } from "./scr/twit/twit.controller.js";

const app = express();

async function main(params) {
  app.use(express.json());

  app.use("/api/twits", twitRouter);

  app.all("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
  });

  app.listen(4200, () => {
    console.log("Server is running on port 4200");
  });
}

main();
