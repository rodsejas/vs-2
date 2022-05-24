import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();

router.get("/models", async (req, res) => {
  let { data: models, error } = await supabase.from("models").select("*");
  res.status(200).json(models);
});

/**
 * For models dropdown list
 */

router.get("/models/dropdown", async (req, res) => {
  let { data: models, error } = await supabase
    .from("models")
    .select("id,model_name");
  res.status(200).json(models);
});

export default router;
