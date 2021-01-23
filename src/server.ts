import "reflect-metadata";
import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { errors } from "celebrate";

import AppError from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(errors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    hello: "Hello from Linked Services",
  });
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return res
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.error(err);

  return res
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

app.listen(3333, () => {
  "Listening on port 3333";
});
