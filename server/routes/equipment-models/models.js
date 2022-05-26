import express from "express";
import { supabase } from "../../db/client.js";

const router = express.Router();

/**
 * GET -> All models
 */
router.get("/models", async (req, res) => {
  let { data: models, error } = await supabase.from("models").select("*");
  res.status(200).json(models);
});

/**
 * POST -> Create new model
 */

router.post("/models", async (req, res) => {
  const body = req.body;
  const { data, error } = await supabase.from("models").insert([body]);
  res.status(201).json(data);
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

/**
 * GET -> Model by ID
 */
router.get("/model/:id", async (req, res) => {
  const id = req.params.id;
  let { data: models, error } = await supabase
    .from("models")
    .select("*")
    .eq("id", id);
  res.status(200).json(models);
});

/**
 * PUT -> Edit models
 */

router.put("/model/:id/edit", async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const { data, error } = await supabase
    .from("models")
    .update(body)
    .eq("id", id);
  if (error) {
    return res.status(400).end();
  }
  res.status(200).json(data);
});

/**
 * DELETE -> Model by ID
 */

router.delete("/model/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase.from("models").delete().eq("id", id);
  res.status(200).json(data);
});

export default router;
