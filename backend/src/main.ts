import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

console.log(port);

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", async (req: Request, res: Response) => {
  res.json({
    message: "Welcome to the Web3 🚀",
  });
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: DApp API Server is running at http://localhost:${port}`
  );
});
