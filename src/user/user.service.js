const { modelOrder, modelResultOrder, modelUser, modelMark, modelTransportUser } = require('../database/models/model');

class UserService {
  async createUser(data) {
    let existGovermentNumber = { goverment_number: data.goverment_number };
    const candidateNumber = await modelTransportUser.findOne({
      where: { goverment_number: existGovermentNumber.goverment_number },
    });

    if (candidateNumber) return 'Такой гос. номер уже существует';

    let user = { name: data.name, telephone: data.telephone };
    user = await modelUser.create(user);

    let nMark = { mark: data.mark };
    const result = await modelMark.findOne({ where: { mark: nMark.mark } });

    if (result) {
      let transport = {
        year_of_issue: data.year_of_issue,
        goverment_number: data.goverment_number,
        UserId: user.id,
        MarkId: result.dataValues.id,
      };
      transport = await modelTransportUser.create(transport);
      return 'Пользователь создан';
    } else {
      let newMarka = {
        mark: data.mark,
      };
      const newMark = await modelMark.create(newMarka);
      let transport = {
        year_of_issue: data.year_of_issue,
        goverment_number: data.goverment_number,
        UserId: user.id,
        MarkId: newMark.id,
      };
      transport = await modelTransportUser.create(transport);
      return 'Пользователь создан';
    }
  }

  async getAllUsers(data) {
    const user = await modelUser.findAll();
    return user;
  }
}

module.exports = new UserService();
