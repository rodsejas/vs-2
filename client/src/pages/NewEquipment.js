import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NewEquipment() {
  const [newEquipment, setNewEquipment] = useState({
    serial_num: "",
    model_id: "",
    status: "",
  });

  const _handleChange = (e) => {
    setNewEquipment({ ...newEquipment, [e.target.name]: e.target.value });
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    // const { serial_num, model_id, status } = newEquipment;
    const reactData = newEquipment;
    const url = `http://localhost:8000/api/v1/equipments`;
    axios
      .post(url, reactData)
      .then((res) => console.log("Data sent"))
      .catch((err) => console.log(err.data));
  };

  return (
    <div>
      <p>New equipment coming soon</p>
      <form
        onSubmit={_handleSubmit}
        method="POST"
        action="http://localhost:8000/api/v1/equipments"
      >
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
