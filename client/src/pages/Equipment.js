import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Equipment() {
  const [equipment, setEquipment] = useState([]);

  const fetchEquipment = async () => {
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/equipment/:id"
    );
    setEquipment(data);
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div>
      <p>Equipment coming soon.</p>
      <p>Test</p>
    </div>
  );
}
