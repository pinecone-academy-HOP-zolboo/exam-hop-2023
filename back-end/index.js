import express from "express";
import { connect } from "./db/database.js";
import cors from "cors";
import bodyParser from "body-parser";

import { router } from "./router/router.js";

const port = 8001;

const app = express();
app.use(bodyParser.json());

app.use(cors());
connect();
app.use("", router);

app.listen(port, () => {
  console.log(`express app listening on http://localhost:${port}`);
});
