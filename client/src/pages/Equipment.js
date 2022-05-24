import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const params = useParams();

  const fetchEquipment = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/equipment/${params.id}`
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
