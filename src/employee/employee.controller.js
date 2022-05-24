const employeeService = require('./employee.service');

class EmployeeController {
  async getAllEmployee(req, res) {
    const employee = await employeeService.getAllEmployee();
    res.json(employee);
  }
}

module.exports = new EmployeeController();
