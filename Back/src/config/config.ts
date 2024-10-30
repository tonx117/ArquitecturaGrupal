import * as dotenv from "dotenv";

// Cargar las variables del archivo .env
dotenv.config();

interface Config {
  database: string;
  username: string;
  password: string;
  host: string;
<<<<<<< HEAD
  port: Number,
=======
  port: number; // Cambia de Number a number
>>>>>>> c434ae5fd687fe24026feedd0ab0a24c99736bbd
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb";
}

export const config: Config = {
<<<<<<< HEAD
  database: process.env.DB_NAME || "Idiomas",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "milanesa",
  host: process.env.DB_HOST || "localhost",
  port: 5432,
=======
  database: process.env.DB_NAME || "idiomas",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "milanesa",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432, // El puerto debe coincidir con el mapeo
>>>>>>> c434ae5fd687fe24026feedd0ab0a24c99736bbd
  dialect: "postgres", 
};
