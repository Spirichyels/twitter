import express from "express";

const app = express();

async function main(params) {
  app.use(express.json());

  app.use("/api/twit", (rq, res) => {
    res.status(200).json({
      message: "success",
    });
  });

  app.listen(4200, () => {
    console.log("Server is running on port 4200");
  });
}

main();
