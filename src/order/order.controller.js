const orderService = require('./order.service');

class OrderController {
  async getAll(req, res) {
    const order = await orderService.getAll();
    res.json(order);
  }

  async createOrder(req, res) {
    const data = req.body;
    const order = await orderService.createOrder(data);
    res.json(order);
  }
}

module.exports = new OrderController();
