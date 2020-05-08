import * as dotenv from "dotenv";
dotenv.config();

const {
  DATABASE_URL = "postgres://postgres:test@localhost:5432",
  DATABASE_NAME = "",
  DATABASE_HOST = "localhost",
  DATABASE_USER_NAME = "#",
  DATABASE_PASSWORD = "#",
  DATABASE_PORT = 5432,
  NODE_ENV = "production",
  FRONTEND_PORT = 3000,
  BACKEND_PORT = 3001,
  PORT,
} = process.env;

const isDev = NODE_ENV === "development";
const isProd = NODE_ENV === "production";
const isTesting = NODE_ENV === "test";

export default {
  isDev,
  isTesting,
  isProd,
  databaseUrl: DATABASE_URL,
  databaseName: DATABASE_NAME,
  databaseHost: DATABASE_HOST,
  databasePort: DATABASE_PORT,
  dataBaseUserName: DATABASE_USER_NAME,
  dataBasePassword: DATABASE_PASSWORD,
  backendAppPort: PORT || BACKEND_PORT,
  frontendAppPort: FRONTEND_PORT,
};
