const express= require("express");
const route= express.Router();
const empController= require("../controllers/empControllers");

route.post("/datasave", empController.dataSave );
route.get("/display", empController.Display );
route.post("/search", empController.empSearch);
route.get("/empdelete", empController.empDelete);
route.post("/editdatashow", empController.empEditshow);
route.post("/editdatasave", empController.empEditSave);

module.exports = route;