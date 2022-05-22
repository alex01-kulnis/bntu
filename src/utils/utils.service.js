const util = require('util');

class UtilsService {
  dispatchErrors(controller) {
    return async (req, res) => {
      try {
        const result = await controller(req, res);
        res.send(result);
      } catch (error) {
        console.log(error.message);
        res.status(400).send({
          type: 'error',
          message: error.message,
        });
      }
    };
  }
}

module.exports = new UtilsService();
