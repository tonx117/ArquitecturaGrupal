import { Sequelize } from "sequelize";
import { config } from "../../config/config";

export const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
<<<<<<< HEAD
=======
  port: Number(config.port),
>>>>>>> c434ae5fd687fe24026feedd0ab0a24c99736bbd
  dialect: config.dialect,
});
