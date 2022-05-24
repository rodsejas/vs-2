import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();

router.get("/workers", async (req, res) => {
  let { data: workers, error } = await supabase.from("workers").select("*");
  res.status(200).json(workers);
});

router.get("/workers/dropdown", async (req, res) => {
  let { data: workers, error } = await supabase
    .from("workers")
    .select("id,first_name,last_name");
  res.status(200).json(workers);
});

router.get("/worker/:id", async (req, res) => {
  const id = req.params.id;
  let { data: workers, error } = await supabase
    .from("workers")
    .select("*")
    .eq("id", id);
  res.status(200).json(workers);
});

export default router;
