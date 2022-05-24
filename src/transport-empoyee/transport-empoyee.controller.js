const transportEmpoyeeService = require('./transport-empoyee.service');

class transportEmpoyeeController {
  async getAllTransportEmpoyee(req, res) {
    const transportEmpoyee = await transportEmpoyeeService.getAllTransportEmpoyee();
    res.json(transportEmpoyee);
  }
}

module.exports = new transportEmpoyeeController();
