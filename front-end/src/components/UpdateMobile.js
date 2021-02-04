import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
const UpdateMobile = () => {
  const { mobile_id } = useParams();

  const mobile = {
    mobile_id: mobile_id,
    type: "",
    company: "",
    price: 0,
    img: "",
    description: "",
  };
  const [mobiles, setMobile] = useState(mobile);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMobile({ ...mobiles, [name]: value });
  };

  const update = () => {
    let data = {
      mobile_id: mobile_id,
      type: mobiles.type,
      company: mobiles.company,
      price: mobiles.price,
      img: mobiles.img,
      description: mobiles.description,
    };
    axios
      .put(`http://localhost:5000/UpdateMobile/${mobile_id}`, data)
      .then((res) => {
        setMobile({ ...mobiles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteMobile = () => {
    axios
      .delete(`http://localhost:5000/DeleteMobile/${mobile_id}`)
      .then(() => {
        setMobile({ ...mobiles });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      <div className="container">
        <div className="p-4 mb-3 bg-dark text-white">
          <h2 className="text-center">Update Mobile </h2>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
        <input
          type="text"
          className="form-control"
          id="type"
          name="type"
          value={mobiles.type}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          className="form-control"
          id="company"
          name="company"
          value={mobiles.company}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          value={mobile.price}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="img">img</label>
        <input
          type="text"
          className="form-control"
          id="img"
          name="img"
          value={mobiles.img}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={mobiles.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="badge badge-success" onClick={update}>
        Update
      </button>
      <button
        type="submit"
        className="badge badge-success"
        onClick={deleteMobile}
      >
        Delete
      </button>
    </div>
  );
};
export default UpdateMobile;
