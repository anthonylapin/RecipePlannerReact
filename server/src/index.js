import express from "express";
import {
  clientStaticFile,
  clientStaticPath,
  pathToRecipesJson,
} from "./config";

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientStaticPath));
  app.get("*", (req, res) => {
    res.sendFile(clientStaticFile);
  });
}

console.log(pathToRecipesJson);

app.listen(5000, () => console.log(`Server is on port ${5000}`));
