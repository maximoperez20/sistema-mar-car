const express = require("express");
var bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
const cors = require("cors");
const { uniqueId, find, result } = require("lodash");
const path = require("path");
const app = express();
const fs = require("fs");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "../taller-app/build")));
mongoose.connect("mongodb://127.0.0.1:27017/MarCarDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// DEFINE CUSTOMER SCHEMA
const customersSchema = {
  key: String,
  id: Number,
  name: String,
  tel: String,
  dni: String,
  domicilio: String,
  car: String,
  dominio: String,
  chasis: String,
  motor: String,
  cedula: String,
  works: Array,
};

const Customer = mongoose.model("Customer", customersSchema);

// RENDER THE BUILD REACT APPLICATION
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../taller-app/build/index.html"));
});
//Gets all customers
app.get("/customers", (req, res) => {
  Customer.find(function (err, docs) {
    res.json(docs);
  });
});

//Gets a customer identified by CUSTOMER'S NAME??
app.get("/customers/search-name/:name", (req, res) => {
  console.log(req.params.name);
  Customer.find(
    { name: { $regex: ".*" + req.params.name + ".*", $options: "i" } },
    function (err, docs) {
      res.json(docs);
    }
  );
});
app.get("/customers/search-dominio/:dominio", (req, res) => {
  console.log(req.params.dominio);
  Customer.find(
    { dominio: { $regex: ".*" + req.params.dominio + ".*", $options: "i" } },
    function (err, docs) {
      console.log(docs);
      res.json(docs);
    }
  );
});
//  Customer.find({ name: /ma/i }, function (err, docs) {
//Create a customer
app.post("/customers/add", (req, res) => {
  const newCustomer = new Customer({
    id: req.body.id,
    name: req.body.name,
    tel: req.body.tel,
    dni: req.body.dni,
    domicilio: req.body.domicilio,
    car: req.body.car,
    dominio: req.body.dominio,
    chasis: req.body.chasis,
    motor: req.body.motor,
    cedula: req.body.cedula,
  });
  newCustomer.save();
  res.send("ok");
});

//Delete a customer
app.delete("/customers/delete/:customerId", (req, res) => {
  console.log("im here in the DELETE METHOD!!", req.params.customerId);

  Customer.deleteOne({ id: req.params.customerId }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(5000, function () {
  console.log("Server started on port 5000");
});

//EDIT A CUSTOMER
app.post("/customers/edit", (req, res) => {
  console.log("edit is here", req.body);
  Customer.updateOne({ id: req.body.id }, { $set: req.body }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//ADD WORK TO CUSTOMER
const WorkSchema = {
  work_id: String,
  fecha: String,
  kilometraje: String,
  trabajo: String,
};
const Work = mongoose.model("Work", WorkSchema);
app.post("/works/add/", (req, res) => {
  const workObj = {
    work_id: req.body.work_id,
    fecha: req.body.fecha,
    kilometraje: req.body.kilometraje,
    trabajo: req.body.trabajo,
  };

  Customer.updateOne(
    { id: req.body.customer_id },
    { $push: { works: workObj } },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

//GET
app.get("/customers/getworks/:customerId", (req, res) => {
  Customer.find({ id: req.params.customerId }, (err, docs) => {
    if (err) {
      console.log(err);
    } else if (docs[0]) {
      res.json(docs[0].works);
    } else {
      res.json({});
    }
  });
});

app.get("/downloads/backup", (req, res) => {
  Customer.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      var myList = JSON.stringify(result);
      fs.writeFile(__dirname + "/test.json", myList, function (err, data) {
        if (err) {
          return console.log(err);
        } else {
          res.sendFile(__dirname + "/test.json");
        }
      });
    }
  });
});
