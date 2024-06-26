const express = require("express")
const router = express()
const employeeController = require("../../controller/employeeController");

router
  .route("/")
  .get(employeeController.getAllEmployees)
  .post(employeeController.createNewEmployee)
  .put(employeeController.updateEmployee)
  .delete(employeeController.deleteEmployee);

router.route("/:id").get(employeeController.getEmployee);

module.exports = router