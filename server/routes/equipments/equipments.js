import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();
router.use(express.json());

router.get("/equipments", async (req, res) => {
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select(
      "*,workers!equipments_worker_id_fkey(first_name,last_name), models!equipments_model_id_fkey(model_name)"
    );
  res.status(200).json(equipments);
});

router.get("/equipment/:id", async (req, res) => {
  const id = req.params.id;
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select(
      "*,workers!equipments_worker_id_fkey(first_name,last_name), models!equipments_model_id_fkey(model_name)"
    )
    .eq("id", id);
  res.status(200).json(equipments);
});

/**
 * GET -> All inspections by equipment ID
 */
router.get("/equipment/:id/inspections", async (req, res) => {
  const id = req.params.id;
  let { data: inspections, error } = await supabase
    .from("inspections")
    .select("*,workers!inspections_worker_id_fkey(first_name,last_name)")
    .eq("equipment_id", id);
  res.status(200).json(inspections);
});

/**
 * POST -> Create new equipment
 */

router.post("/equipments", async (req, res) => {
  const body = req.body;
  const { data, error } = await supabase.from("equipments").insert([body]);
  res.status(201).json(data);
});

/**
 * POST -> Create new inspection for the equipment
 */

router.post("/inspections", async (req, res) => {
  const body = req.body;
  const { data, error } = await supabase.from("inspections").insert([body]);
  res.status(201).json(data);
});

/**
 * PUT -> Edit equipment, all fields
 */

router.put("/equipment/:id/edit", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const { data, error } = await supabase
    .from("equipments")
    .update(body)
    .eq("id", id);
  if (error) {
    return res.status(400).end();
  }
  console.log("Error:", error);
  console.log("Data:", data);
  res.status(200).json(data);
});

/**
 * GET -> Edit equipment page, return obj without foreign key table queries
 */

router.get("/equipment/:id/edit", async (req, res) => {
  const id = req.params.id;
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select("*")
    .eq("id", id);
  res.status(200).json(equipments);
});

/**
 * DELETE
 */

router.delete("/equipment/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase
    .from("equipments")
    .delete()
    .eq("id", id);
  res.status(200).json(data);
});

export default router;
