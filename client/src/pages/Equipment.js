import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL, BASE_API } from "../Constants";

export default function Equipment() {
  const [equipment, setEquipment] = useState([]);
  const params = useParams();

  const fetchEquipment = async () => {
    const { data } = await axios.get(
      `${BASE_URL}${BASE_API}/equipment/${params.id}`
    );
    setEquipment(data);
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return (
    <div>
      {equipment.map((e) => {
        return (
          <>
            <p>{e.serial_num}</p>
            <p>{e.manufacture_date}</p>
            <p>{e.specification}</p>
            <p>{e.status}</p>
            <p>{e.workers.first_name}</p>
            <p>{e.workers.last_name}</p>
          </>
        );
      })}
    </div>
  );
}
