import { DataTypes } from "sequelize";
import { sequelize } from "../client.js";

const Equipment = sequelize.define(
  "Equipment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    serial_num: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "equipments",
    underscored: true,
    updatedAt: false,
  }
);

export default Equipment;
