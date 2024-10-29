import * as dotenv from "dotenv";

// Cargar las variables del archivo .env
dotenv.config();

interface Config {
  database: string;
  username: string;
  password: string;
  host: string;
  port: Number,
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb";
}

export const config: Config = {
  database: process.env.DB_NAME || "Idiomas",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "milanesa",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  dialect: "postgres", 
};
