import express from "express";
import { PORT, BASE_API } from "./constants.js";
import workersRouter from "./routes/workers/workers.js";
import equipmentsRouter from "./routes/equipments/equipments.js";
import modelsRouter from "./routes/equipment-models/models.js";
import inspectionsRouter from "./routes/inspections/inspections.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(BASE_API, workersRouter);
app.use(BASE_API, equipmentsRouter);
app.use(BASE_API, modelsRouter);
app.use(BASE_API, inspectionsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
