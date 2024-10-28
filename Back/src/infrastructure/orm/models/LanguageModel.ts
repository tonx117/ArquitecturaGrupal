import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../sequelize";


export const LanguageModel = sequelize.define("Language", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
