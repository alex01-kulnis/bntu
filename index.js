const config = require('./src/config');
const express = require('express');
const cors = require('cors');
const orderRouter = require('./src/order/order.router');
const userRouter = require('./src/user/user.router');
const markRouter = require('./src/mark/mark.router');
const serviceRouter = require('./src/service/service.router');
const employeeRouter = require('./src/employee/employee.router');
const transportEmpoyeeRouter = require('./src/transport-empoyee/transport-empoyee.router');
const transportUserRouter = require('./src/transport-user/transport-user.router');
const sequelize = require('./src/database/database');
require('./src/database/models/model');

async function bootstrap() {
  await connectDatabase();

  const app = express();
  createServer(app);
  bindRoutes(app);
}

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
  } catch (e) {
    console.log(e);
  }
}

function createServer(app) {
  const port = config.PORT || 3000;
  app.listen(port, () => console.log(`Server was started:${port}`));
}

function bindRoutes(app) {
  const prefix = '/api';
  app.use(cors());
  app.use(express.json());
  app.use(prefix, orderRouter);
  app.use(prefix, userRouter);
  app.use(prefix, markRouter);
  app.use(prefix, serviceRouter);
  app.use(prefix, employeeRouter);
  app.use(prefix, transportEmpoyeeRouter);
  app.use(prefix, transportUserRouter);
  // app.use(prefix, authMiddleware, snapshotsRouter);
  // app.use(prefix, authMiddleware, walletsRouter);
  // app.use(prefix, authMiddleware, transactionCategoriesRouter);
  // app.use(prefix, authMiddleware, transactionsRouter);
}

bootstrap();
