const { modelOrder, modelResultOrder, modelUser, modelMark, modelEmployee } = require('../database/models/model');

class EmployeeService {
  async getAllEmployee() {
    const employee = await modelEmployee.findAll();
    return employee;
  }
}

module.exports = new EmployeeService();
