import express from "express";
import {
  clientStaticFile,
  clientStaticPath,
  isProduction,
  developmentStaticFile,
} from "./config";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();

app.use(morgan(isProduction ? "combined" : "dev"));
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorMiddleware);

if (isProduction) {
  app.use(express.static(clientStaticPath));
  app.get("*", (req, res) => {
    res.sendFile(clientStaticFile);
  });
}

app.listen(5000, () => console.log(`Server is on port ${5000}`));
