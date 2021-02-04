import React, { useState} from "react";
import axios from "axios";
const NewMobile =() =>{
    const  CreateMobile ={
      mobile_id:null,
      type :"",
      company:"",
      price:null,
      img:"",
      description:"",
      published: false
    }
    const [mobile,setMobile]=useState(CreateMobile);
    const [submitted, setSubmitted] = useState(false);
    const handleInputChange = e =>{
      const {name,value}=e.target;
      setMobile({...mobile,[name]:value})
    }
    const save =()=>{
      const data ={
        type:mobile.type,
        company:mobile.company,
        price:mobile.price,
        img:mobile.img,
        description:mobile.description,
      }
      axios
      .post('http://localhost:5000/CreateMobile',data)
      .then((res)=>{
         setMobile({
          mobile_id:res.data.mobile_id,
          type:res.data.type,
          company:res.data.company,
          price:res.data.price,
          img:res.data.img,
          description:res.data.description,
         })
         setSubmitted(true)
         console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    const newMobile =()=>{
       setMobile(mobile);
       setSubmitted(false);
    }
    

    return(
      <div className="submit-form">
        <div className="container">
          <div className="p-4 mb-3 bg-dark text-white">
            <h2 className="text-center">New Mobile</h2>
          </div>
          </div>
        {submitted ?(
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newMobile}>Add</button>
          </div>
        ):(
          <div>
          <div className="form-group">
            <label htmlFor="type"> Type </label>
            <input 
            type="text"
            className="form-control"
            id="type"
            required
            value={mobile.type}
            onChange={handleInputChange}
            name="type"
            placeholder="Ex : iphone 12 ...."/>
        
            </div>

          <div className="form-group">
            <label htmlFor="company"> Company </label>
            <input 
            type="text"
            className="form-control"
            id="company"
            required
            value={mobile.company}
            onChange={handleInputChange} name="company"
            placeholder="Ex : Apple ...."/>
            
            </div>

          <div className="form-group">
            <label htmlFor="price"> Price </label>
            <input 
            type="number"
            className="form-control"
            id="price"
            required
            value={mobile.price}
            onChange={handleInputChange}
            name="price"
            placeholder="Ex : 199 JD ...."/>
            </div>
          <div className="form-group">
          <label htmlFor="img"> Img </label>
            <input type="text"
            id="img"
            value={mobile.img}
            onChange={handleInputChange}
            required
            className="form-control"
            name="img"
            placeholder="Ex :URl ...."/>
            </div>
          <div className="form-group">
          <label htmlFor="description"> Description </label>
            <input type="text"
            id="description"
            value={mobile.description}
            onChange={handleInputChange}
            required
            className="form-control"
            name="description"
            placeholder="Ex : Operating System: iOS 14 ...."/>
            </div>
            <button onClick={save} className="btn btn-success">
            Submit
          </button>
            </div>
        )}
        
        
      </div>
    );
}
export default NewMobile;
