import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();
router.use(express.json());

router.get("/inspections", async (req, res) => {
  let { data: inspections, error } = await supabase
    .from("inspections")
    .select(
      "*,workers!inspections_worker_id_fkey(first_name,last_name), equipments!inspections_equipment_id_fkey(serial_num, models!equipments_model_id_fkey(model_name))"
    );
  res.status(200).json(inspections);
});

export default router;
