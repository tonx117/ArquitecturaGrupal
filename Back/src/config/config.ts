import * as dotenv from "dotenv";

// Cargar las variables del archivo .env
dotenv.config();

interface Config {
  database: string;
  username: string;
  password: string;
  host: string;
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb";
}

export const config: Config = {
  database: process.env.DB_NAME || "your_database_name",
  username: process.env.DB_USER || "your_username",
  password: process.env.DB_PASSWORD || "your_password",
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres", 
};
