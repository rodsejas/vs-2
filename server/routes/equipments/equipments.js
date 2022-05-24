import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();
router.use(express.json());

router.get("/equipments", async (req, res) => {
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select("*");
  res.status(200).json(equipments);
});

router.get("/equipment/:id", async (req, res) => {
  const id = req.params.id;
  let { data: equipments, error } = await supabase
    .from("equipments")
    .select("*")
    .eq("id", id);
  res.status(200).json(equipments);
});

router.post("/equipments", async (req, res) => {
  const body = req.body;
  console.log(body);
  const { data, error } = await supabase.from("equipments").insert([body]);
});

export default router;
