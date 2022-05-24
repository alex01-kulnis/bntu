const { modelOrder, modelResultOrder, modelUser } = require('../database/models/model');

class OrderService {
  async getAll() {
    const order = await modelOrder.findAll();
    return order;
  }

  async createOrder(data) {
    const orderRes = {
      date: data.date,
      UserId: data.UserId,
      EmployeeId: data.EmployeeId,
      ServiceId: data.ServiceId,
      EmployeeTransportId: data.EmployeeTransportId,
      result: data.result,
      card: data.card,
      user: data.user,
      service: data.service,
      employee: data.employee,
      employeeTransport: data.employeeTransport,
      mark: data.mark,
      goverment_number: data.goverment_number,
      year_of_issue: data.year_of_issue,
      telephone: data.telephone,
    };
    const order = await modelOrder.create(orderRes);
    const orderResult = { OrderId: order.id, result: data.result };
    await modelResultOrder.create(orderResult);
    return order;
  }
}

module.exports = new OrderService();
