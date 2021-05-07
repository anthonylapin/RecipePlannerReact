import express from "express";
import { port } from "./config";

const app = express();

app.listen(port, () => console.log(`Server is on port ${port}`));
