const { modelMark, modelService, modelEmployeeTransport, modelTransportUser } = require('../database/models/model');

class TransportUserService {
  async getAllTransportUser() {
    const transportUser = await modelTransportUser.findAll();
    return transportUser;
  }

  async createTransport(data) {
    let nMark = { mark: data.mark };
    const result = await modelMark.findOne({ where: { mark: nMark.mark } });

    if (result) {
      let transport = {
        year_of_issue: data.year_of_issue,
        goverment_number: data.goverment_number,
        UserId: data.user,
        MarkId: result.dataValues.id,
      };
      transport = await modelTransportUser.create(transport);
      return transport;
    } else {
      let newMarka = {
        mark: data.mark,
      };
      const newMark = await modelMark.create(newMarka);
      console.log(newMark);
      let transport = {
        year_of_issue: data.year_of_issue,
        goverment_number: data.goverment_number,
        UserId: data.user,
        MarkId: newMark.id,
      };
      transport = await modelTransportUser.create(transport);
      return transport;
    }
  }
}

module.exports = new TransportUserService();
