const transportUserService = require('./transport-user.service');

class TransportUserController {
  async getAllTransportUser(req, res) {
    const transportUser = await transportUserService.getAllTransportUser();
    res.json(transportUser);
  }

  async createTransport(req, res) {
    const data = req.body;
    const transport = await transportUserService.createTransport(data);
    console.log(transport);
    res.json(transport);
  }
}

module.exports = new TransportUserController();
