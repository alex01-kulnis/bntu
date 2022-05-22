const config = require('./src/config');
const express = require('express');
const cors = require('cors');
const orderhRouter = require('./src/order/order.router');
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
  app.use(prefix, orderhRouter);
  // app.use(prefix, currencyRouter);
  // app.use(prefix, authMiddleware, snapshotsRouter);
  // app.use(prefix, authMiddleware, walletsRouter);
  // app.use(prefix, authMiddleware, transactionCategoriesRouter);
  // app.use(prefix, authMiddleware, transactionsRouter);
}

bootstrap();
