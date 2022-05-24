const markService = require('./mark.service');

class MarkController {
  async getAllMarks(req, res) {
    const user = await markService.getAllMarks();
    res.json(user);
  }
}

module.exports = new MarkController();
