import express from "express";
import {
  clientStaticFile,
  clientStaticPath,
  isProduction,
  developmentStaticFile,
} from "./config";

const app = express();

// app.use("/api", router);

if (isProduction) {
  app.use(express.static(clientStaticPath));
}

app.get("*", (req, res) => {
  res.sendFile(isProduction ? clientStaticFile : developmentStaticFile);
});

app.listen(5000, () => console.log(`Server is on port ${5000}`));
