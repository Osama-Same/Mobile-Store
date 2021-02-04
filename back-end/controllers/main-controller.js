const { json } = require("express");
const connection = require("../db");

const getAllMobile = (req, res) => {
  const sql = `select *
  From mobile`;

  connection.query(sql, (err, result) => {
    if (err){
    res.json(err);
    }
    res.json(result)
  });
};
const FindMobileId = (req, res) => {
  const sql = `select *
  From mobile where mobile_id = ?`;
  const data =[req.params.mobile_id]
  connection.query(sql,data,(err, result) => {
    if(err){
      res.json(err)
      return;
    }
    if(result.length){
       res.json(result[0])
       return;
    }
  res.json({kind:"not_found"})
  });
};
const createNewMobile = (req, res) => {
  const sql = `INSERT INTO mobile 
                (type,company,price,img,description) 
                 VALUES (?,?,?,?,?)`;
                 const data = [req.body.type,req.body.company,req.body.price,req.body.img,req.body.description]
  connection.query(sql,data, (err, result) => {
    if (err){
    res.json(err);
    return;
    }
    res.json({mobile_id:res.insertId,...data})
  });
};
const updateMobile = (req, res) => {
  let sql = `UPDATE mobile 
                SET  type = ? , company = ? , price= ? , img = ? ,description=?
                WHERE mobile_id = ?`;
  let data = [
    req.body.type,
    req.body.company,
    req.body.price,
    req.body.img,
    req.body.description,
    req.params.mobile_id,
  ];
  connection.query(sql, data, (err, result, filed) => {
    if (err){;
    res.json(err);
    }
    res.json({mobile_id:res.insertId,...data});
  });
};

const deleteMobile = (req, res) => {
  const sqlCommand = `DELETE FROM mobile WHERE mobile_id = ?`;
  const data = [req.params.mobile_id];
  connection.query(sqlCommand, data, (err, result) => {
    if (err){
    res.json(err);
    return;
    }
    if (result.affectedRows === 0) {
      res.json({ kind: "not_found" });
      return;
    }
    res.json(result);
  });
};
module.exports = {
  getAllMobile,
  FindMobileId,
  createNewMobile,
  updateMobile,
  deleteMobile,
};
