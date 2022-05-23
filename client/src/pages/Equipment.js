import React from "react";
import { useState, useEffect } from "react";

export default function Equipment() {
  const [equipments, setEquipments] = useState([]);

  useState(() => {
    fetch("http://localhost:8000/equipments").then((res) =>
      res.json().then((data) => setEquipments(data))
    );
  });

  return (
    <div>
      <p>Equipment coming soon.</p>
      <p>Test</p>
    </div>
  );
}
