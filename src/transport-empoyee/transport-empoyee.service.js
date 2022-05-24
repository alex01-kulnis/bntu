const { modelMark, modelService, modelEmployeeTransport } = require('../database/models/model');

class TransportEmpoyeeService {
  async getAllTransportEmpoyee() {
    const transportEmpoyee = await modelEmployeeTransport.findAll();
    return transportEmpoyee;
  }
}

module.exports = new TransportEmpoyeeService();
