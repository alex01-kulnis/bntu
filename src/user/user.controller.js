const userService = require('./user.service');

class UserController {
  async createUser(req, res) {
    const data = req.body;
    const user = await userService.createUser(data);
    res.json(user);
  }

  async getAllUsers(req, res) {
    const data = req.body;
    const user = await userService.getAllUsers(data);
    res.json(user);
  }
}

module.exports = new UserController();
