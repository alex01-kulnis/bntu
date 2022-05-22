const { modelOrder, modelResultOrder } = require('../database/models/model');

class CurrencyService {
  async getAll() {
    const order = await modelOrder.findAll();
    return order;
  }

  async createOrder(data) {
    const order = await modelOrder.create(data);
    const orderResult = { OrderId: order.id, result: data.result };
    await modelResultOrder.create(orderResult);
    return order;
  }
}

module.exports = new CurrencyService();
