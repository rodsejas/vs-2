import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, BASE_API } from "../Constants";

export default function NewEquipment() {
  const [newEquipment, setNewEquipment] = useState({
    serial_num: "",
    model_id: "",
    status: "",
  });
  const navigate = useNavigate();

  const _handleChange = (e) => {
    setNewEquipment({ ...newEquipment, [e.target.name]: e.target.value });
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${BASE_URL}${BASE_API}/equipments`;
    try {
      const { data } = await axios.post(url, newEquipment);
      const id = data[0].id;
      navigate(`/equipment/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>New equipment coming soon</p>
      <form onSubmit={_handleSubmit}>
        <label>
          <p>Serial Number</p>
          <input type="text" name="serial_num" onInput={_handleChange} />
        </label>
        <label>
          <p>Model Id</p>
          <input type="text" name="model_id" onInput={_handleChange} />
        </label>
        <label>
          <p>Status</p>
          <input type="text" name="status" onInput={_handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
