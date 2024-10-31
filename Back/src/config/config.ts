import * as dotenv from "dotenv";

// Cargar las variables del archivo .env
dotenv.config();

interface Config {
  database: string;
  username: string;
  password: string;
  host?: string;
  port: number; // Cambia de Number a number
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb";
}

// Validación de las variables de entorno
const requiredEnvVars = [
  "DB_NAME",
  "DB_USER",
  "DB_PASSWORD",
  "DB_HOST",
  "DB_PORT"
];

for (const varName of requiredEnvVars) {
  if (!process.env[varName]) {
    throw new Error(`La variable de entorno ${varName} es requerida.`);
  }
}

export const config: Config = {
  database: process.env.DB_NAME || "idiomas",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "milanesa",
  host: "db" ,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432, // El puerto debe coincidir con el mapeo
  dialect: "postgres", 
};
