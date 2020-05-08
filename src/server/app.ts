import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import http from "http";
dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
export const server = http.createServer(app);
