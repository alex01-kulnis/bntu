const serviceService = require('./service.service');

class ServiceController {
  async getAllServices(req, res) {
    const service = await serviceService.getAllServices();
    res.json(service);
  }
}

module.exports = new ServiceController();
