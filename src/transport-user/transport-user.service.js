const { modelMark, modelService, modelEmployeeTransport, modelTransportUser } = require('../database/models/model');

class TransportUserService {
  async getAllTransportUser() {
    const transportUser = await modelTransportUser.findAll();
    return transportUser;
  }

  async createTransport(data) {
    let existGovermentNumber = { goverment_number: data.goverment_number };
    const candidateNumber = await modelTransportUser.findOne({
      where: { goverment_number: existGovermentNumber.goverment_number },
    });

    if (candidateNumber) return 'Такой гос. номер уже существует';

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
      return 'Транспорт добавлен';
    } else {
      let newMarka = {
        mark: data.mark,
      };
      const newMark = await modelMark.create(newMarka);

      let transport = {
        year_of_issue: data.year_of_issue,
        goverment_number: data.goverment_number,
        UserId: data.user,
        MarkId: newMark.id,
      };
      transport = await modelTransportUser.create(transport);
      return 'Транспорт добавлен';
    }
  }
}

module.exports = new TransportUserService();
