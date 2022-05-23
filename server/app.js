import express from "express";
import { PORT, BASE_API } from "./constants.js";
import workersRouter from "./routes/workers/workers.js";
import Equipment from "./db/models/equipment.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/equipments", async (req, res) => {
  const equipments = await Equipment.findAll();
  res.json(equipments);
});

app.use(BASE_API, workersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
