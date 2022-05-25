import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, BASE_API } from "../Constants";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function Equipments() {
  const [equipments, setEquipments] = useState([]);

  const fetchEquipments = async () => {
    const { data } = await axios.get(`${BASE_URL}${BASE_API}/equipments`);
    setEquipments(data);
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  return (
    <>
      <NavBar />
      <Link to={`/equipment/create`}>
        <button>Create new equipment</button>
      </Link>

      {equipments.map((e) => {
        return (
          <Link to={`/equipment/${e.id}`}>
            <div key={e.id}>
              <h2>{e.serial_num}</h2>
              <p>{e.manufacture_date}</p>
              <p>{e.date_of_first_use}</p>
              <p>{e.end_of_life}</p>
              <p>{e.status}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
