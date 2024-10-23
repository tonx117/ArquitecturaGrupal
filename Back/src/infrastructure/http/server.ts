import express from "express";
import userRoutes from "./routes/UserRoutes";
import languageRoutes from "./routes/LanguageRoutes";
import { sequelize } from "../orm/sequelize";

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(languageRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
