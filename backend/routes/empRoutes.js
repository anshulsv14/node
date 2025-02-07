const express= require("express");
const route= express.Router();
const empController= require("../controllers/empControllers");

route.post("/datasave", empController.dataSave );
route.get("/display", empController.Display );
route.post("/search", empController.empSearch );


module.exports = route;