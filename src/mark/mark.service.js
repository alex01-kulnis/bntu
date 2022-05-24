const { modelOrder, modelResultOrder, modelUser, modelMark } = require('../database/models/model');

class MarkService {
  async getAllMarks() {
    const user = await modelMark.findAll();
    return user;
  }
}

module.exports = new MarkService();
