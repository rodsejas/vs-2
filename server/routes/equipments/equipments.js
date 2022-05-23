import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();

router.get("/equipments", async (req, res) => {
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select("*");
  res.status(200).json(equipments);
});

router.get("/equipments/:id", async (req, res) => {
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select("*")
    .eq("id", "1");
  res.status(200).json(equipments);
});

export default router;
