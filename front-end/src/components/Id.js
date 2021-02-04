// functional component
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const Id = () => {
  let { id } = useParams;
  useEffect(() => {
    FindProductsId(id);
    console.log(id);
  }, []);
  const [products, setproducts] = useState([]);
  const FindProductsId = () => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  return (
    <div className="container">
      {products.map((e) => {
       return <div className="col-md-12">
         <div className="card">
         <div className="card-body">
         <p>{e[0].name}</p>
         <h6 className="card-subtitle mb-2 text-muted">
         {e[0].price}
         </h6>
         <p className="card-text">{e[0].description}</p>
         </div>
         </div>
        </div>
      })
    }  
    </div>
  )
};
export default Id;
