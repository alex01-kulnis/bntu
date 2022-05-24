const { modelMark, modelService } = require('../database/models/model');

class ServiceService {
  async getAllServices() {
    const service = await modelService.findAll();
    return service;
  }
}

module.exports = new ServiceService();
