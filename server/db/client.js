import { createClient } from "@supabase/supabase-js";
import { Sequelize } from "sequelize";
import "dotenv/config";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export const sequelize = new Sequelize(
  "postgresql://postgres:dM2EEpcgDVXrHCLwZ@db.icxujcstmvzimkufacay.supabase.co:5432/postgres"
); // Example for postgres
