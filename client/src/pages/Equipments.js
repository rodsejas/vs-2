import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Equipments() {
  const [equipments, setEquipments] = useState([]);

  const fetchEquipments = async () => {
    const { data } = await axios.get("http://localhost:8000/api/v1/equipments");
    setEquipments(data);
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  return (
    <div>
      <p>Equipment coming soon.</p>
      <p>Test</p>
    </div>
  );
}
