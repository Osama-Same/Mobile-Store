import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Mobile = () => {
  const [mobile, setMobile] = useState([]);
  useEffect(() => {
    getAllMobile();
  }, []);
  const getAllMobile = () => {
    axios.get("http://localhost:5000/mobile").then((res) => {
      setMobile(res.data);
    });
  };
  const array = mobile.map((e, i) => {
    return (
      <ul className="card" key={i}>
        <img src={e.img} className="figure-img img-fluid rounded" alt="..." />
        <li className="card-title">Type : {e.type}</li>
        <li className="card-title">company : {e.company}</li>
        <li className="card-title">Price : {e.price}</li>
        <li className="card-title">Description : {e.description}</li>
        <button>
          <Link
            to={"/UpdateMobile/" + e.mobile_id}
            params={{ id: e.mobile_id }}
          >
            {" "}
            Eidt
          </Link>
        </button>
      </ul>
    );
  });

  return (
    <div className="container">
      <div>
        <div className="p-4 mb-3 bg-dark text-white">
          <h2 className="text-center"> Mobile</h2>
        </div>
      </div>
      <div className="container"></div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5">{array}</div>
    </div>
  );
};
export default Mobile;
