import express from "express";
import cors from "cors"; // Importa cors
import UserRouter from "./routes/UserRoutes";
import LanguageRouter from "./routes/LanguageRoutes";
import { sequelize } from "../orm/sequelize";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", UserRouter);
app.use("/user", LanguageRouter);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
