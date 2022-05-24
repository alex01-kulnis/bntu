const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

const modelUser = User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'user',
    timestamps: false,
  }
);

class Card extends Model {}

const modelCard = Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'card',
    timestamps: false,
  }
);

class TransportUser extends Model {}

const modelTransportUser = TransportUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    goverment_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_of_issue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'TransportUser',
    timestamps: false,
  }
);

class Mark extends Model {}

const modelMark = Mark.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'mark',
    timestamps: false,
  }
);

class Order extends Model {}

const modelOrder = Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employeeTransport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goverment_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year_of_issue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'order',
    timestamps: false,
  }
);

class Service extends Model {}

const modelService = Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    name_service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'service',
    timestamps: false,
  }
);

class Employee extends Model {}

const modelEmployee = Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    FIO: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'employee',
    timestamps: false,
  }
);

class EmployeeTransport extends Model {}

const modelEmployeeTransport = EmployeeTransport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    goverment_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'EmployeeTransport',
    timestamps: false,
  }
);

class ResultOrder extends Model {}

const modelResultOrder = ResultOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    tableName: 'ResultOrder',
    timestamps: false,
  }
);

modelUser.hasOne(modelCard);
modelCard.belongsTo(modelUser);

modelUser.hasMany(modelTransportUser);
modelTransportUser.belongsTo(modelUser);

modelMark.hasMany(modelTransportUser);
modelTransportUser.belongsTo(modelMark);

modelUser.hasMany(modelOrder);
modelOrder.belongsTo(modelUser);

modelService.hasMany(modelOrder);
modelOrder.belongsTo(modelService);

modelEmployee.hasMany(modelOrder);
modelOrder.belongsTo(modelEmployee);

modelEmployeeTransport.hasOne(modelOrder);
modelOrder.belongsTo(modelEmployeeTransport);

modelOrder.hasOne(modelResultOrder);
modelResultOrder.belongsTo(modelOrder);

module.exports = {
  modelUser,
  modelCard,
  modelTransportUser,
  modelMark,
  modelOrder,
  modelService,
  modelEmployee,
  modelEmployeeTransport,
  modelResultOrder,
};
