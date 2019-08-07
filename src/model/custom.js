var Sequelize = require("sequelize");
var sequelize = new Sequelize("custom", "root", "tcc901210", {
  host: "localhost",
  dialect: "mysql"
});

// const sequelize = new Sequelize('postgres://tucchun:tcc901210@localhost:tucchun')

const Customer = sequelize.define(
  "customer",
  {
    id: {
      type: Sequelize.UUID,
      unique: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sex: {
      type: Sequelize.ENUM(["男", "女"]),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING
    },
    fullAddress: {
      type: Sequelize.STRING,
      get() {
        return `${this.getDataValue("country")}${this.getDataValue(
          "city"
        )}${this.getDataValue("address")}`;
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  },
  {
    freezeTableName: true // Model 对应的表名将与model名相同
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.error("Connect failed");
    console.log(err);
  });

// Customer.sync();

module.exports.Customer = Customer;
